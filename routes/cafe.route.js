const express = require('express');
const controller = require('../controllers/cafe.controller');

const router = express.Router();

// GET
router.get('/', controller.getCafes);

module.exports = router;
