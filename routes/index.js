require('dotenv').config();
const express = require('express');
const asyncHandler = require('express-async-handler');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const accountController = require('../controllers/account');
const utils = require('../utils/index');
const { account } = require('../models');

const privateKey = fs.readFileSync('./config/private.key', 'utf8');

const router = express.Router();

router.post('/api/token', asyncHandler(async (req, res, next) => {
    const { username, password, grant_type } = req.body;
    if (grant_type === 'password') {
        try {
            const findAccount = await account.findOne({ where: { username } });
            if (account !== null) {
                const record = findAccount.dataValues;
                if (bcrypt.compareSync(password, record.password)) {
                    const payload = {
                        username: record.username,
                    };
                    const token = await jwt.sign(payload, privateKey, { expiresIn: '5h' });
                    res.status(200).send(`{ "access_token": "${token}" }`);
                    next();
                } else {
                    res.status(400).send('{"error": "invalid_grant"}');
                    next();
                }
            } else {
                res.status(400).send('{"error": "invalid_grant"}');
                next();
            }
        } catch (error) {
            next(error);
        }
    } else {
        res.status(400).send('{ "error": "unsupported_grant_type" }');
        next();
    }
}));

/** ACCOUNT ROUTE */
router.get('/api/accounts', asyncHandler(accountController.get));
router.post('/api/accounts', asyncHandler(accountController.add));


module.exports = router;
