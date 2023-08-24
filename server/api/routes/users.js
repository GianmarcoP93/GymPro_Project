const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { User } = require("../../db");
const { verifyUser } = require("../../middleWare/userAuth");

/**
 * @path /api/users/register
 */

app.post("/register", async (req, res) => {
  const schema = Joi.object().keys({
    username: Joi.string().required(),
    subscription: Joi.date().required(),
    passNumber: Joi.string().required(),
    email: Joi.string().email().required(),
    tel: Joi.number().required(),
    plan: Joi.string().required(),
    role: Joi.string().required(),
    gym: Joi.string().required(),
  });
  try {
    const { email, tel } = req.body;

    const data = await schema.validateAsync(req.body);

    data.passNumber = bcrypt.hashSync(data.passNumber, 12);

    data.email = data.email.toLowerCase();

    const findEmail = await User.findOne({ email }, "-_id email", {
      lean: true,
    });

    if (findEmail) {
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
