const blogModel = require("../model/blogmodel")



// new blog
const newBlog = async (req, res) =>{
    try{
        // get document data from request body
        const data = {
            title: req.body.title,
            content: req.body.content
        }

    // create a new document
    const blog= await blogModel.create(data)
    res.status(200).json({
        status:"Success",
        data: blog

    })
    } catch(error){
        res.status(500).json({
            status: "fail",
            message: error.message
        })
    }
}

// get all blogs
const allBlogs = async (req, res)=>{
    try{
        // use the mongodb function to get all document
        // const blogs = await 
    }
    catch(error){

    }
}




module.exports = {
    newBlog
}