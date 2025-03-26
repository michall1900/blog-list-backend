const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogsList) => {
  return blogsList.reduce((total, blog) => total + blog.likes , 0)
}

module.exports = {
  dummy,
  totalLikes
}