const mongoose = require("mongoose");
require("dotenv").config();
exports.connect = async() => {
  await mongoose
    .connect(process.env.mongodb_url)
    .then(console.log("db connection is successful"))
    .catch((error) => {
      console.log(`Error in db connection ${error}`);
      process.exit(1);
    });
};
