const express = require('express')
const path = require('path')

const app = express()

// set view engine
app.set('view engine', 'ejs')
app.set('views', pathm)

// use middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(path.resolve())

// routes

// server running
app.listen(PORT, () => {
	console.log(`app running on port ${PORT}`)
})