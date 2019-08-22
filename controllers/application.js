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

    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const findApplication = await application.findByPk(id);
            const data = findApplication.dataValues;
            res.status(200).send(applicationSerializer.serialize(data));
            next();
        } catch (error) {
            next(error);
        }
    },

    async add(req, res, next) {
        try {
            const accessToken = utils.getAccessToken(req);
            const payload = await jwt.verify(accessToken, privateKey);
            const { id } = payload;
            const data = await new JSONAPIDeserializer().deserialize(req.body);
            data.account_id = id;
            const saveApplication = await application.create(data);
            res.status(200).send(applicationSerializer.serialize(saveApplication));
            next();
        } catch (error) {
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const getApplication = await application.findByPk(id);
            await getApplication.destroy();
            res.status(204).send({});
            next();
        } catch (error) {
            next(error);
        }
    },
};
