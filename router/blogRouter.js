const express = require("express")
const router = express.Router()

const {newBlog} = require("../controller/blogcontroller")
//   All possible routes
router.route("/blog").post(newBlog)





module.exports = router