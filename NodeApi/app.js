const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config()

//db
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB Connection Error: ${err.message}`)
})

// Bring in routes
const postRoutes = require("./routes/post")

// middleware
app.use(morgan('dev'))

app.use("/", postRoutes);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`)})