const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { User, Admin } = require("../../db");
const { verifyUser } = require("../../middleWare/userAuth");

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
    card: Joi.object().required(),
    gym: Joi.string().required(),
  });
  try {
    const { email, tel } = req.body;

    const data = await schema.validateAsync(req.body);

    // data.passNumber = bcrypt.hashSync(data.passNumber, 12);

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

    return res.status(201).json({ user: user._doc });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
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
