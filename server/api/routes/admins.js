const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { Admin, User } = require("../../db");
const jwt = require("jsonwebtoken");
const { verifyAdmin } = require("../../middleWare/adminAuth");

/**
 * @path /api/admins/register
 */

app.post("/register", async (req, res) => {
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

module.exports = app;
