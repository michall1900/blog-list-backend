const getBlogModel = require('../models/blog')

const getModel = async (req, res, next) => {
  try{
    req.Blog = await getBlogModel()
    next()
  }
  catch (error){
    next(error)
  }
}

module.exports = getModel