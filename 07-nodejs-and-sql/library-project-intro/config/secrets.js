const dotenv = require("dotenv");
const path = require("path");

const config = dotenv.config({ path: path.resolve(__dirname, "../.env") });

module.exports = { ...process.env };
