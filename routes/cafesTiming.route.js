const express = require('express');
const controller = require('../controllers/cafeTiming.controller');

const router = express.Router();

// GET
router.get('/', controller.getCafesTiming);

module.exports = router;