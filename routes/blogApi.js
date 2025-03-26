const controller = require('../contorllers/blogController')
const getModel = require('../middlewares/getBlogModel')
const router = require('express').Router()

router.use(getModel)

router.get('/', controller.getAllBlogs)

router.post('/', controller.postNewBlog)


module.exports = router