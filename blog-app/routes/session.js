const express = require('express');
const SessionController = require('../controllers/session');

const router = express.Router();

router.post('/sessions', SessionController.createSession);
router.put('/sessions/:sessionId', SessionController.updateLogoutTime);

module.exports = router;
