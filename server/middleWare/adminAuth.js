const jwt = require("jsonwebtoken");
const { Admin } = require("../db");

const config = process.env;

const verifyAdmin = async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken)
    return res.status(403).json({ message: "Non sei autorizzato" });

  const token = bearerToken.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, config.SECRET_KEY);

    const admin = await Admin.findOne(
      { _id: decoded.admin_id },
      "company email _id role",
      {
        lean: true,
      }
    );

    if (!admin) {
      return res.status(404).json({ message: "Non sei autorizzato" });
    } else {
      req.admin = admin;
      return next();
    }
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: "Non sei autorizzato" });
  }
};

module.exports = { verifyAdmin };
