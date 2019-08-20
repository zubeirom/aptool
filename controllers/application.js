const jwt = require('jsonwebtoken');
const fs = require('fs');
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
const utils = require('../utils/index');
const { application } = require('../models');
const { account } = require('../models');
const applicationSerializer = require('../serializers/application');

const privateKey = fs.readFileSync('./config/private.key', 'utf8');


module.exports = {
    async get(req, res, next) {
        try {
            const accessToken = utils.getAccessToken(req);
            const payload = await jwt.verify(accessToken, privateKey);
            const { id } = payload;
            const findApplications = await application.findAll({
                where: {
                    account_id: id,
                },
                include: [{
                    model: account,
                    as: 'account',
                    where: { id },
                }],
            });
            res.status(200).send(applicationSerializer.serialize(findApplications));
            next();
        } catch (error) {
            next(error);
        }
    },

    async add(req, res, next) {
        try {
            const data = await new JSONAPIDeserializer().deserialize(req.body);
            console.log(data);
        } catch (error) {
            next(error);
        }
    },
};
