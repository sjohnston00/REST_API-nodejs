const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get all the posts from the database
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();        
        res.json(posts);
    } catch (err) {
        res.json({ message:err });
    }
});

//Create a new post in the database
router.post('/', async (req, res) => {
    //Non-Async way
    // const post = new Post({
    //     title:req.body.title,
    //     description:req.body.description
    // })

    // post.save()
    // .then(data =>{
    //     res.json(data)
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.json({message: err })
    // })
    
    //More Simpler way async way
    const post = new Post ({
        title:req.body.title,
        description:req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message:err });
    }
});
module.exports = router;

