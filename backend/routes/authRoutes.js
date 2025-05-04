const express = require('express');
const router = express.Router();
const { signup, login, forgotPassword } = require('../controllers/authController');

// Add test route (optional)
router.get('/test', (req, res) => {
  res.send('Auth route working');
});

// Auth routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

module.exports = router;
