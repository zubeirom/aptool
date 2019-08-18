const { account } = require('../models');
const utils = require('../utils/index');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;

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
            const data = await new JSONAPIDeserializer().deserialize(req.body);
            const { username, firstname, lastname, password } = data
            const record = await account.findOne({ where: { username } })
            if (record === null) {
                const hash = await utils.hash(password);
                const saveUser = await account.create({ username, firstname, lastname, password: hash })
                res.status(200).send(saveUser);
                next();
            } 

        } catch (error) {
            next(error)
        }
    }
};
