const dummy = () => {
  return 1
}

const isEmptyList = (list) => {
  return !list || !list.length
}

const totalLikes = (blogsList) => {
  return blogsList.reduce((total, blog) => total + blog.likes , 0)
}

const favoriteBlog = (blogsList) => {
  return isEmptyList(blogsList) ? null :
    blogsList.reduce ((maxBlog, blog) => (maxBlog.likes >= blog.likes)? maxBlog: blog, blogsList[0])
}

const createAuthorBlogCount = (blogsList) => {
  const countBlogs = blogsList.reduce((accumulator, blog) => {
    accumulator[blog.author] = (accumulator[blog.author] || 0) + 1
    return accumulator
  }, {})
  return Object.entries(countBlogs).map(([author, blogs]) => ({
    author,
    blogs
  }))
}

const mostBlogs = (blogsList) => {
  const authorBlogCount = createAuthorBlogCount(blogsList)
  return isEmptyList(blogsList) ? null :
    authorBlogCount.reduce((mostBlog, authorData) => (mostBlog.blogs >= authorData.blogs) ? mostBlog: authorData, authorBlogCount[0])
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}