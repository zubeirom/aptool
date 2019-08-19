const jwt = require('jsonwebtoken');
const fs = require('fs');
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
const utils = require('../utils/index');
const { account } = require('../models');
const accountSerializer = require('../serializers/account');

const privateKey = fs.readFileSync('./config/private.key', 'utf8');

module.exports = {
    async get(req, res, next) {
        try {
            const accessToken = utils.getAccessToken(req);
            const payload = await jwt.verify(accessToken, privateKey);
            const { id } = payload;
            const findAccount = await account.findByPk(id);
            const data = findAccount.dataValues;
            res.status(200).send(accountSerializer.serialize(data));
            next();
        } catch (error) {
            next(error);
        }
    },

    async add(req, res, next) {
        try {
            const data = await new JSONAPIDeserializer().deserialize(req.body);
            const {
                username, firstname, lastname, password,
            } = data;
            const record = await account.findOne({ where: { username } });
            if (record === null) {
                const hash = await utils.hash(password);
                const saveUser = await account.create({
                    username, firstname, lastname, password: hash,
                });
                res.status(200).send(accountSerializer.serialize(saveUser));
                next();
            }
        } catch (error) {
            next(error);
        }
    },
};
