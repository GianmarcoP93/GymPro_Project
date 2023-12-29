const { User } = require("../db");
const crypto = require("crypto");

const createPassNumber = async () => {
  let passNumber;

  while (true) {
    passNumber = crypto.randomBytes(5).toString("hex").toUpperCase();
    const findPassNumber = await User.findOne({ passNumber });

    if (!findPassNumber) {
      return passNumber;
    }
  }
};

module.exports = { createPassNumber };
