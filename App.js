
require('./config/blogdb')
const { use } = require( 'express/lib/application')
const express = require("express");
const blogRouter = require("./router/routerBlog")
const commentRouter = require("./router/commentRouter")


const cors = require("cors");

const port = process.env.PORT || 8020;
const app = express();






app.get("/", (req, res) => {
  res.send("This is the landimg page of my blog api");
});

app.use(express.json());
app.use("/api", blogRouter)
app.use("/api", commentRouter)

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
