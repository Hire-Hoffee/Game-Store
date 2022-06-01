require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const routes = require('./routes/router')


const PORT = process.env.PORT || 4221
const app = express()

app.use(logger('dev'))

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})
