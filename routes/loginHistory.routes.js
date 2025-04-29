const express = require('express');
const router = express.Router();
const controller = require('../controllers/loginHistory.controller');

router.get('/login-histories/logins/:loginId', controller.getLoginHistoryByLoginId);

module.exports = router;

