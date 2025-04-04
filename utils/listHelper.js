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

const createAuthorCountByValue = (blogsList, valueGetter, fieldName) => {
  const countBlogs = blogsList.reduce((accumulator, blog) => {
    const value = valueGetter(blog)
    accumulator[blog.author] = (accumulator[blog.author] || 0) + value
    return accumulator
  }, {})
  return Object.entries(countBlogs).map(([author, total]) => ({
    author,
    [fieldName]: total
  }))
}

const mostBlogs = (blogsList) => {
  const authorBlogCount = createAuthorCountByValue(blogsList, () => 1, 'blogs')
  return isEmptyList(blogsList) ? null :
    authorBlogCount.reduce((mostBlog, authorData) => (mostBlog.blogs >= authorData.blogs) ? mostBlog: authorData, authorBlogCount[0])
}

const mostLikes = (blogsList) => {
  const authorLikesCount = createAuthorCountByValue(blogsList, blog => blog.likes, 'likes')
  return isEmptyList(blogsList) ? null :
    authorLikesCount.reduce((mostBlog, authorData) => (mostBlog.likes >= authorData.likes) ? mostBlog: authorData, authorLikesCount[0])
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}