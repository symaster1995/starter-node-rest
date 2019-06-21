const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/user.controller')
const AuthController = require('../app/controllers/auth.controller')

const md = require('../middleware/jwt')

router.post('/login', AuthController.login)
router.get('/users', md, UserController.getAllUsers)

module.exports = router