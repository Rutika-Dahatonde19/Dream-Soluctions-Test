const express = require('express');
const UserController = require('../controllers/users');

const router = express.Router();

router.post('/users', UserController.createUser);

module.exports = router;
