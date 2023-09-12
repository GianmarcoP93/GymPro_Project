const jwt = require("jsonwebtoken");
const { User } = require("../db");

const config = process.env;

const verifyUser = async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken)
    return res.status(403).json({ message: "Non sei autorizzato" });

  const token = bearerToken.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, config.SECRET_KEY);

    const user = await User.findOne(
      { _id: decoded.user_id },
      "-password -__v -createdAt -updatedAt",
      {
        lean: true,
      }
    );

    if (!user) {
      return res.status(404).json({ message: "Non sei autorizzato" });
    } else {
      req.user = user;
      return next();
    }
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: "Non sei autorizzato" });
  }
};

module.exports = { verifyUser };
