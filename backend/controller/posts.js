const Post = require("../models/post")
const multer  = require('multer')

//for content image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const fieldname = Date.now() + '-' + file.fieldname
    cb(null, fieldname)
  }
})

const upload = multer({ storage: storage })




const getPosts = async (req,res)=>{
    const posts = await Post.find()
    return res.json(posts)
}

const getPost = async (req,res)=>{
    const post = await Post.findById(req.params.id)
    res.json(post)
}

const addPost = async (req,res)=>{
    try {
        // console.log(req.user);
    
    const {title, content, coverImage} = req.body

    if(!title || !content)
    {
        return res.json({message: "Required Content"})
    }

    const newPost = await Post.create({
        title, content, coverImage: req.file.filename,
        createdBy: req.user.id
    })
    return res.json(newPost)
    } catch (error) {
        console.log(error);        
    }
}

const editPost = async (req,res)=>{
    const {title, content} = req.body
    const coverImage = req.file;
    let post = await Post.findById(req.params.id)
    try {
        if(post){
            let coverImage = req.file?.filename ?  req.file?.filename : post.coverImage
            await Post.findByIdAndUpdate(req.params.id, {...req.body, coverImage}, {new:true})
            res.json({title, content, coverImage})
    }
    } catch (error) {
     return res.status(404).json({message: "not found data"})
    }
}

const deletePost = async (req,res)=>{
    try {
        await Post.deleteOne({_id : req.params.id})
        res.json({status:"ok"})
    } catch (error) {
        return res.status(400).json({message: "Post doesn't exist"})
    }
}


module.exports = {getPosts, getPost, addPost, editPost, deletePost, upload}