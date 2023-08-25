const express = require("express");
const app = express.Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const { User, Admin } = require("../../db");

/**
 * @path /api/login
 */

app.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }, "_id email passNumber role", {
      lean: true,
    });

    const admin = await Admin.findOne({ email }, "_id email password role", {
      lean: true,
    });

    if (!user && !admin) {
      return res
        .status(404)
        .json({ message: "I dati inseriti non corrispondono" });
    }

    if (user) {
      // const compare = await bcrypt.compare(password, user.passNumber);

      // if (!compare) {
      //   return res
      //     .status(404)
      //     .json({ message: "I dati inseriti non corrispondono" });
      // }

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      return res.status(200).json(user);
    }

    if (admin) {
      const compare = await bcrypt.compare(password, admin.password);

      if (!compare) {
        return res
          .status(404)
          .json({ message: "I dati inseriti non corrispondono" });
      }

      const token = jwt.sign(
        { admin_id: admin._id, email },
        process.env.SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );

      admin.token = token;

      return res.status(200).json(admin);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = app;
