const express = require('express')
const app = express()
const requestsLogger = require('middlewares/requestsLogger')


app.use(requestsLogger)

module.exports = app