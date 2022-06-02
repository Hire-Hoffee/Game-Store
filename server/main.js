require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const { tableCreation: dbConnection } = require('./models/models')
const routes = require('./routes/router')


const PORT = process.env.PORT || 4221
const app = express()

app.use(logger('dev'))

app.use('/api', routes)


;(async function startServer() {
  try {
    await dbConnection.authenticate()
    await dbConnection.sync({ alter: true })
    console.log("\nDatabase connected")
    app.listen(PORT, () => console.log(`Server is running on port ${ PORT }`))
  } catch (error) {
    console.log(error)
  }
})()
