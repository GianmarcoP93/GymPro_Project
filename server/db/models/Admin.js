const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const adminSchema = new Schema(
  {
    company: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    remember: {
      type: Boolean,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { strict: true, timestamps: true }
);

const Admin = model("Admin", adminSchema);

module.exports = Admin;
