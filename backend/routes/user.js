const express = require('express')
const { userSignUp, userLogin, getuser } = require('../controller/user')
const router = express.Router()

router.post('/signUp', userSignUp)
router.post('/login', userLogin)
router.get('/user/:id', getuser)


module.exports = router