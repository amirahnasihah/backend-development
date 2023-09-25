const dotenv = require("dotenv");
const path = require("path");

// to have access to process.env
const config = dotenv.config({ path: path.resolve(__dirname, "../.env") });

// console.log(process.env);

module.exports = { ...process.env };
