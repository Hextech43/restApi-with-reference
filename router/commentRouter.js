const express = require( 'express' )
const router = express.Router()
const {newComment, allComment} = require( '../controller/commentController')

router
    .route( '/blog/:id/comment' )
    .post( newComment )
    .get(allComment)


module.exports = router;