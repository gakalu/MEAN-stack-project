const express = require('express');
const userController = require('../Controller/UserController')
const router = express.Router();

router.post('/login', userController.login);
router.post('/signup', userController.signup);

module.exports = router;