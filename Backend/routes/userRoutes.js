// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/userController');

// Signup route
router.post('/signup', signup);

module.exports = router;
