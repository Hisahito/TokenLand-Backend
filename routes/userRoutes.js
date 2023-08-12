const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.registerUser);

// Otras rutas relacionadas con usuarios

module.exports = router;
