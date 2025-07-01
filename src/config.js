const dotenv = require("dotenv");

const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env${env === "development" ? "" : `.${env}`}` });

module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.ENV || "development",
};
