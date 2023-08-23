const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_CONNECTION_URI);
    console.log("AtlasDB connected");
  } catch (error) {
    console.log(error);
  }
};

const models = {
  User: require("./models/User"),
  Admin: require("./models/Admin"),
};

module.exports = {
  connect,
  ...models,
};
