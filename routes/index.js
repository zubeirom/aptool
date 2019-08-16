require('dotenv').config();
const express = require('express');
const utils = require('../utils/index');
const asyncHandler = require('express-async-handler');
const fs = require('fs');

const privateKey = fs.readFileSync('./config/private.key', 'utf8');

const router = express.Router();

router.post('/api/token', asyncHandler(async (req, res, next) => {
    const { grant_type, password, username } = req.body;
}))

module.exports = router