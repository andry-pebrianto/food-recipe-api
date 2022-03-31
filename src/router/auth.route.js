const express = require('express');
const {
  register,
  login,
} = require('../controllers/auth.controller');

const router = express.Router();

router
  .post('/auth/register', register)
  .post('/auth/login', login);

module.exports = router;
