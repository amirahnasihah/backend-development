const dotenv = require("dotenv");
const path = require("path");

// console.log(process.env);

const config = dotenv.config({ path: path.resolve(__dirname, "../.env") });

module.exports = { ...process.env };
