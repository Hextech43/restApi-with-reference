const express = require("express")
const router = express.Router()

const {newBlog, allBlogs, singleBlog, updateBlog, deleteOne} = require("../controller/blogcontroller")
//   All possible routes
router.route("/blog").post(newBlog).get(allBlogs)

router.route("/blog/:id").get(singleBlog).patch(updateBlog).delete(deleteOne)



module.exports = router