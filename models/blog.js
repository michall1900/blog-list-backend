const mongoose = require('mongoose')

let Blog = null

const createSchema = () => {
  return new mongoose.Schema ({
    title: String,
    author: String,
    url: String,
    likes: Number
  })
}

const setToJsonScheme = (blogScheme) => {
  blogScheme.set('toJSON', {
    transform: (_, obj) => {
      obj.id = obj._id.toString()
      delete obj._id
      delete obj.__v
    }
  })
}

const initializeModel = () =>{
  const blogScheme = createSchema()
  setToJsonScheme(blogScheme)
  return mongoose.model ('Blog', blogScheme)
}

const getBlogModel = async () => {
  if(!Blog){
    Blog = initializeModel()
    await Blog.init()
  }

  return Blog
}


module.exports = getBlogModel