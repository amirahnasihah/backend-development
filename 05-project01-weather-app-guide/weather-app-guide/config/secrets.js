// to store env variables
// require('dotenv').config()
const dotenv = require('dotenv')
const path = require('path')

const config = dotenv.config({path.resolve(__dirname, '../.env')})