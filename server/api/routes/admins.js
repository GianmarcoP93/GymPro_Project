const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { Admin, User } = require("../../db");
const jwt = require("jsonwebtoken");
const { verifyAdmin } = require("../../middleWare/adminAuth");
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
 * @path /api/admins/register
 */

app.post("/register", async (req, res) => {
  const { company, email, password } = req.body;
  const schema = Joi.object().keys({
    company: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
    remember: Joi.boolean().required(),
    role: Joi.string().required(),
  });
  try {
    const data = await schema.validateAsync(req.body);

    if (data.password !== data.confirmPassword)
      return res
        .status(500)
        .json({ message: "Le password inserite non corrispondono" });

    data.password = bcrypt.hashSync(data.password, 12);

    data.email = data.email.toLowerCase();

    const findAdminEmail = await Admin.findOne(
      { email: req.body.email },
      "-_id email",
      {
        lean: true,
      }
    );

    const findUserEmail = await User.findOne(
      { email: req.body.email },
      "-_id email",
      {
        lean: true,
      }
    );

    if (findAdminEmail || findUserEmail)
      return res.status(400).json({
        message: "Email già esistente.",
      });

    const admin = await Admin.create(data);

    const token = jwt.sign(
      { admin_id: admin._id, email: admin.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );

    const mailOptions = {
      from: `${EMAIL}`,
      to: `${email}`,
      subject: "Registrazione GymPro",
      text: `Ciao ${company},

Siamo lieti di comunicarti che l'account è stato creato con successo su GymPro. Sei ora un amministratore all'interno della nostra piattaforma dedicata al fitness e al benessere.

Ecco i dettagli dell'account:

E-mail: ${email}
Password: ${password}

In veste di amministratore, hai il compito di gestire e supportare gli utenti all'interno dell'applicazione. Avrai accesso a strumenti specializzati per:

- Monitorare l'andamento degli utenti e i progressi nel loro percorso di fitness.
- Monitorare l'andamento delle iscrizioni e delle entrate mensili.

Se hai bisogno di ulteriori informazioni o hai domande su come utilizzare le funzionalità dell'account amministratore, siamo qui per aiutarti. Non esitare a contattare il nostro team di supporto tramite l'apposita sezione nell'applicazione.

Grazie per essere parte della community di GymPro e per il tuo impegno nell'aiutare gli utenti a raggiungere i loro obiettivi di fitness. Siamo entusiasti di vedere il tuo contributo.

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

    return res.status(200).json({ admin, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

/**
 * @path /api/admins/getAdmin
 */

app.get("/getAdmin", verifyAdmin, async (req, res) => {
  try {
    return res.status(200).json(req.admin);
  } catch (error) {
    return res.status(500).json(error);
  }
});

/**
 * @path /api/users/usersList/:admin_id
 */

app.get("/usersList/:admin_id", verifyAdmin, async (req, res) => {
  const { admin_id } = req.params;
  try {
    const users = await User.find({ gym: admin_id }, "-password", {
      lean: true,
    });

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
});

/**
 * @path /api/admins/updateSubscription
 */

app.patch("/updateSubscription", verifyAdmin, async (req, res) => {
  try {
    const { id, date } = req.body;

    const user = await User.findOneAndUpdate(
      { _id: id },
      { subscriptionExp: date }
    );

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

/**
 * @path /api/admins/deleteUser
 */

app.delete("/deleteUser", verifyAdmin, async (req, res) => {
  try {
    const { id } = req.body;

    const user = await User.findByIdAndDelete({ _id: id });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

/**
 * @path /api/admins/createCard/:user_id
 */

app.patch("/createCard/:user_id", verifyAdmin, async (req, res) => {
  const exerciseSchema = Joi.object({
    name: Joi.string().required().messages({
      "string.empty": `Selezionare esercizio`,
    }),
    set: Joi.string().required().messages({
      "string.empty": `Compilare il campo set`,
    }),
    rep: Joi.number().required().min(1).messages({
      "number.min": `Ripetizioni deve essere maggiore di 0`,
    }),
    rec: Joi.string().required().messages({
      "string.empty": `Compilare il campo recupero`,
    }),
    kg: Joi.number().required().min(1).messages({
      "number.min": `Kg deve essere maggiore di 0`,
    }),
  });

  const objSchema = Joi.object({
    day: Joi.number().integer().min(1).required(),
    exercises: Joi.array().items(exerciseSchema).min(1).required(),
  });

  const cardSchema = Joi.object({
    expiry: Joi.date().required().messages({
      "date.base": "Inserire scadenza scheda",
    }),
    card: Joi.array().items(objSchema).min(1).required(),
  });

  const exercisesImage = [
    {
      id: 0,
      name: "Panca piana bilanciere",
      img: "https://hips.hearstapps.com/menshealth-uk/main/assets/bench-press.gif?resize=980:*",
    },
    {
      id: 1,
      name: "Panca inclinata bilanciere",
      img: "https://hips.hearstapps.com/menshealth-uk/main/assets/incline-bench-press.gif?crop=1.00xw:0.845xh;0,0.137xh&resize=980:*",
    },
    {
      id: 2,
      name: "Curl alternati manubri",
      img: "https://hips.hearstapps.com/menshealth-uk/main/assets/curlsthor3.gif?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      id: 3,
      name: "Curl bilanciere",
      img: "https://hips.hearstapps.com/menshealth-uk/main/assets/ez-bar-curl.gif?crop=0.5337579617834395xw:1xh;center,top&resize=980:*",
    },
    {
      id: 4,
      name: "Distensioni con manubri",
      img: "https://hips.hearstapps.com/menshealth-uk/main/assets/how-to-do-the-seated-shoulder-press-dumbbell.gif?resize=980:*",
    },
    {
      id: 5,
      name: "Alzate laterali",
      img: "https://hips.hearstapps.com/menshealth-uk/main/assets/how-to-do-a-lateral-raise.gif?crop=0.563xw:1.00xh;0.216xw,0&resize=980:*",
    },
    {
      id: 6,
      name: "Squat",
      img: "https://hips.hearstapps.com/menshealth-uk/main/assets/squatbb.gif?crop=0.8431528662420382xw:1xh;center,top&resize=980:*",
    },
    {
      id: 7,
      name: "Leg press",
      img: "https://hips.hearstapps.com/menshealth-uk/main/assets/how-to-do-the-leg-press.gif?crop=1.00xw:0.845xh;0,0.0311xh&resize=980:*",
    },
  ];

  try {
    const { user_id } = req.params;

    const data = await cardSchema.validateAsync(req.body);

    const insertImage = data.card.map((item) => {
      const updatedExercise = item.exercises.map((ex) => {
        const findExerciseName = exercisesImage.find(
          (obj) => obj.name === ex.name
        );
        if (findExerciseName) {
          return { ...ex, img: findExerciseName.img, id: findExerciseName.id };
        }
        return ex;
      });
      return { ...item, exercises: updatedExercise };
    });

    const updatedData = { ...data, card: insertImage };

    const user = await User.findByIdAndUpdate(
      { _id: user_id },
      { cardInfo: updatedData }
    );

    return res.status(200).json(user);
  } catch (error) {
    if (error?.details?.[0]?.message) {
      return res.status(500).json({ message: `${error.details[0].message}` });
    } else {
      console.log(error);
      return res
        .status(500)
        .json({ message: `Errore durante la compilazione scheda` });
    }
  }
});

module.exports = app;
