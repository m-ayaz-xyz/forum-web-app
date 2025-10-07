const express = require('express')
const { getPosts, getPost, addPost, editPost, deletePost, upload } = require('../controller/posts')
const verifyToken = require('../middleware/auth')
const router = express.Router()

router.get('/', getPosts) //Get all the posts
router.get('/:id', getPost) //Get post by id 
router.post('/', verifyToken, upload.single("contentImage"), addPost) //To create Post
router.put('/:id', upload.single("contentImage"), editPost) //to edit post 
router.delete('/:id', deletePost) //to deleye post

module.exports = router