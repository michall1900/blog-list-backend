const dummy = () => {
  return 1
}

const totalLikes = (blogsList) => {
  return blogsList.reduce((total, blog) => total + blog.likes , 0)
}

const favoriteBlog = (blogsList) => {
  if(!blogsList || !blogsList.length)
    return null
  return blogsList.reduce ((maxBlog, blog) => (maxBlog.likes >= blog.likes)? maxBlog: blog, blogsList[0])
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}