const express = require('express')
const path = require('path')

const app = express()

// set view engine

// use middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(path.resolve())

// routes

// server running
app.listen(PORT, () => {
	console.log(``)
})