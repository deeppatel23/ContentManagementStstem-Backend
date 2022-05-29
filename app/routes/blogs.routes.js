module.exports = app => {
    const blogs = require("../controllers/blogs.controller.js");
  
    var router = require("express").Router();
  
    // Create a new blog
    router.post("/create", blogs.create);
  
    // Retrieve all blogs
    router.get("/", blogs.findAll);
  
    // Retrieve all published blogs
    router.get("/published", blogs.findAllPublished);
  
    // Retrieve a single blog with id
    router.get("/find/:id", blogs.findOne);
  
    // Update a blog with id
    router.put("/update/:id", blogs.update);
  
    // Delete a blog with id
    router.delete("/delete/:id", blogs.delete);
  
    // Delete all blogs
    router.delete("/deleteall", blogs.deleteAll);
  
    app.use('/api/blogs', router);
  };
  