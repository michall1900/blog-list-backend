const getAllBlogs = async (req, res) => {
  const jsonBlog = await req.Blog.find({})
  res.json(jsonBlog)
}

const postNewBlog = async (req, res) => {
  const newBlog = new req.Blog(req.body)
  const savedBlog = await newBlog.save() 
  res.json(savedBlog)
}

const tryCatchWrapper = (method) => {
  return async (req, res, next) => {
    try{
      await method(req, res)
    }
    catch (error){
      next(error)
    }
  }
}

module.exports = {
  getAllBlogs: tryCatchWrapper(getAllBlogs),
  postNewBlog: tryCatchWrapper(postNewBlog)
}