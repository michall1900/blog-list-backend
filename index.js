const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')
const mongoose = require('mongoose')


mongoose.set('strictQuery', false)
const init = async () => {
  try{
    await mongoose.connect(config.MONGO_URI)
    logger.info('Connected to MongoDB.') 
  
    app.listen(config.PORT, () => {
      logger.info(`Server running on port ${config.PORT}`)
    })
  }
  catch(error){
    logger.error(`Error connecting MongoDB: ${error.message}`)
    process.exit(1)
  }

}

init()

const closingSignals = ['SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGHUP', 'SIGBREAK']

closingSignals.forEach((signal) => {
  process.once(signal, async() => {
    logger.info(`Received ${signal}`)
    if(mongoose.connection.readyState){
      await mongoose.connection.close()
      logger.info(`Disconnect from mongoose`)
    }
      
    process.exit(0)
  })
})