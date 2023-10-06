const express = require('express')
const path = require('path')
const {

const app = express()

// set view engine
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

// use middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(path.resolve())

// routes

// server running
app.listen(PORT, () => {
	console.log(`app running on port ${PORT}`)
})