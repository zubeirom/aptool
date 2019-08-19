/* eslint-disable camelcase */
require('dotenv').config();
const express = require('express');
const asyncHandler = require('express-async-handler');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const bcrypt = require('bcryptjs');
const accountController = require('../controllers/account');
const applicationController = require('../controllers/application');
// const utils = require('../utils/index');
const { account } = require('../models');

const privateKey = fs.readFileSync('./config/private.key', 'utf8');

const jwtMW = exjwt({
    secret: privateKey,
});

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
                        id: record.id,
                    };
                    const token = await jwt.sign(payload, privateKey, { expiresIn: '3h' });
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
router.get('/api/accounts', jwtMW, asyncHandler(accountController.get));
router.post('/api/accounts', asyncHandler(accountController.add));

/** APPLICATION ROUTE */
router.get('/api/applications', jwtMW, asyncHandler(applicationController.get));


module.exports = router;
