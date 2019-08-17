const { Account } = require('../models');
const utils = require('../utils/index');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('./config/private.key', 'utf8');

module.exports = {
    async get(req, res, next) {
        try {
            const access_token = utils.getAccessToken(req);
            const payload = await jwt.verify(access_token, privateKey);
            const { id } = payload;
            const account = Account.findByPk(id);
            res.status(200).send(account);
            next();
        } catch (error) {
            next(error);
        }
    },

    async add(req, res, next) {
        try {
            const { username, firstname, lastname, password } = req.body.account;
            const record = await Account.findOne({ where: { username } })
            console.log(record)
            // if (record === null) {
            //     const hash = await utils.hash(password);
            //     const saveUser = await Account.create({ username, firstname, lastname, password: hash })
            // } 

        } catch (error) {
            next(error)
        }
    }
};
