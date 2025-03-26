require('dotenv').config()
const express = require('express')
const app = express()
const requestsLogger = require('./middlewares/requestsLogger')
const blogRouter = require('./routes/blogApi')
const { unknownEndpoint, idErrorHandler, validationErrorHandler, duplicateErrorHandler } = require('./middlewares/errorsHandlers')

app.use(express.json())
app.use(requestsLogger)
app.use('/api/blogs', blogRouter)
app.use(unknownEndpoint)
app.use(idErrorHandler)
app.use(validationErrorHandler)
app.use(duplicateErrorHandler)

module.exports = app