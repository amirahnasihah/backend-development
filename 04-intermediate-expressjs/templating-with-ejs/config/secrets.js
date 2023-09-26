const dotenv = require("dotenv");
// file and directory paths that we want to work with is .env
const path = require("path");

// path to have access to .env variables
// to have access to process.env, do this:
const config = dotenv.config({ path: path.resolve(__dirname, "../.env") });

// console.log(process.env);

module.exports = { ...process.env };
