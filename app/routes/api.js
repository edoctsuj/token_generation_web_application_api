const express = require('express');
const router = express.Router();

// Validator
const { validateBody, validateQuery } = require('../requests/validator');
// Validations
const { UserRegisterValidation } = require('../requests/validations/userValidation');
// Controllers
const UserController = require('../controllers/UserController');

// Routes
router.post('/user/register', [validateBody(UserRegisterValidation), UserController.UserRegister]);
router.get('/user/generate-token', UserController.UserGenerateToken);

module.exports = router;
