const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { User, Admin } = require("../../db");
const { verifyUser } = require("../../middleWare/userAuth");
const nodemailer = require("nodemailer");

const { EMAIL, PW } = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: `${EMAIL}`,
    pass: `${PW}`,
  },
});

/**
 * @path /api/users/register
 */

app.post("/register", async (req, res) => {
  const { subscription, plan } = req.body;
  const parts = plan.month_cost.split("-");
  const months = Number(parts[0]);
  const cost = Number(parts[1]);

  const schema = Joi.object().keys({
    username: Joi.string().required(),
    subscription: Joi.date().required(),
    passNumber: Joi.string().required(),
    email: Joi.string().email().required(),
    tel: Joi.number().required(),
    plan: Joi.object().required(),
    role: Joi.string().required(),
    subscriptionExp: Joi.date().required(),
    cardInfo: Joi.object().required(),
    gym: Joi.string().required(),
  });
  try {
    const { email, tel } = req.body;

    const data = await schema.validateAsync(req.body);

    const generatePassword = (len, arr) => {
      let pass = "";
      for (let i = len; i > 0; i--) {
        pass += arr[Math.floor(Math.random() * arr.length)];
      }
      return pass;
    };

    const password = generatePassword(
      8,
      "0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVxXyYzZ!$_@?#"
    );

    const cryptedPw = bcrypt.hashSync(password, 12);

    data.password = cryptedPw;

    data.email = data.email.toLowerCase();

    const findUserEmail = await User.findOne({ email }, "-password", {
      lean: true,
    });

    const findAdminEmail = await Admin.findOne(
      { email: req.body.email },
      "-_id email",
      {
        lean: true,
      }
    );

    if (findUserEmail || findAdminEmail) {
      return res.status(400).json({
        message: "Email già esistente.",
      });
    }

    const findTel = await User.findOne({ tel }, "-_id tel", {
      lean: true,
    });

    if (findTel) {
      console.log(findTel);
      return res.status(400).json({
        message: "Numero cellulare già esistente.",
      });
    }

    const user = await User.create(data);

    const subscriptionExp = new Date(subscription);

    switch (months) {
      case 1:
        subscriptionExp.setMonth(subscriptionExp.getMonth() + months);
        break;
      case 3:
        subscriptionExp.setMonth(subscriptionExp.getMonth() + months);
        break;
      case 6:
        subscriptionExp.setMonth(subscriptionExp.getMonth() + months);
        break;
      case 12:
        subscriptionExp.setMonth(subscriptionExp.getMonth() + months);
        break;
    }
    user.subscriptionExp = subscriptionExp;
    user.plan.months = months;
    user.plan.cost = cost;
    await user.save();

    const mailOptions = {
      from: `${EMAIL}`,
      to: `${email}`,
      subject: "Registrazione GymPro",
      text: `Gentile ${req.body.username},

Siamo lieti di annunciarti che la tua registrazione a GymPro è stata completata con successo! Benvenuto nella nostra community dedicata al fitness e al benessere.

Ecco i dettagli del tuo account:

E-mail: ${email}
Password: ${password}
Con GymPro, avrai accesso a una serie di strumenti e risorse per aiutarti nel tuo percorso di fitness. La nostra applicazione ti consentirà di:

Pianificare e tenere traccia dei tuoi allenamenti personalizzati.
Monitorare i tuoi progressi e i risultati ottenuti.
Ti invitiamo a effettuare l'accesso all'applicazione utilizzando le tue credenziali e a esplorare tutte le fantastiche funzionalità che abbiamo da offrire. In caso di domande o assistenza, non esitare a contattare il nostro team di supporto tramite l'apposita sezione.

Grazie per aver scelto GymPro per raggiungere i tuoi obiettivi di fitness. Non vediamo l'ora di accompagnarti in questo emozionante viaggio verso la salute e il benessere.

Cordiali saluti,

Il Team di GymPro
`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Errore nell'invio dell'e-mail!" });
      }
    });

    return res.status(201).json({ user: user._doc });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Richiesta fallita, codice errore: 500" });
  }
});

/**
 * @path /api/users/getUser
 */

app.get("/getUser", verifyUser, async (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = app;
