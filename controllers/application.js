const jwt = require('jsonwebtoken');
const fs = require('fs');
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
const Sequelize = require('sequelize');
const utils = require('../utils/index');

const { Op } = Sequelize;
const { application } = require('../models');
const { account } = require('../models');
const { event } = require('../models');
const applicationSerializer = require('../serializers/application');

const privateKey = fs.readFileSync('./config/private.key', 'utf8');


module.exports = {
    async get(req, res, next) {
        try {
            const accessToken = utils.getAccessToken(req);
            const payload = await jwt.verify(accessToken, privateKey);
            const { id } = payload;
            req.query.account_id = id;
            if (req.query.company) {
                const val = req.query.company;
                req.query.company = {
                    [Op.iLike]: `%${val}%`,
                };
            } else {
                delete req.query.company;
            }
            if (!req.query.status || req.query.status === 'GET ALL') {
                delete req.query.status;
            }
            const findApplications = await application.findAll({
                where: req.query,
                include: [
                    {
                        model: account,
                        as: 'account',
                        where: { id },
                    },
                    {
                        model: event,
                        as: 'events',
                    },
                ],
                order: [
                    ['created', 'DESC'],
                ],
            });
            res.status(200).send(applicationSerializer.serialize(findApplications));
            next();
        } catch (error) {
            console.log(error);
            next('Server Error! We will fix this as soon as possible. If you have any questions, send an email at zubeir.mohamed@outlook.de. Thank you ');
        }
    },

    async getById(req, res, next) {
        try {
            const accessToken = utils.getAccessToken(req);
            const payload = await jwt.verify(accessToken, privateKey);
            const userId = payload.id;
            const { id } = req.params;
            const findApplication = await application.findByPk(id, {
                include: [
                    {
                        model: event,
                        as: 'events',
                    },
                ],
            });
            const data = findApplication.dataValues;
            if (userId === data.account_id) {
                res.status(200).send(applicationSerializer.serialize(data));
                next();
            } else {
                res.status(400).send({ message: 'Unauthorized' });
                next();
            }
        } catch (error) {
            console.log(error);
            next('Server Error! We will fix this as soon as possible. If you have any questions, send an email at zubeir.mohamed@outlook.de. Thank you ');
        }
    },

    async add(req, res, next) {
        try {
            const accessToken = utils.getAccessToken(req);
            const payload = await jwt.verify(accessToken, privateKey);
            const { id } = payload;
            const data = await new JSONAPIDeserializer({
                keyForAttribute: 'underscore_case',
            }).deserialize(req.body);
            data.account_id = id;
            const saveApplication = await application.create(data);
            res.status(200).send(applicationSerializer.serialize(saveApplication));
            next();
        } catch (error) {
            console.log(error);
            next('Server Error! We will fix this as soon as possible. If you have any questions, send an email at zubeir.mohamed@outlook.de. Thank you ');
        }
    },

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = await new JSONAPIDeserializer({
                keyForAttribute: 'underscore_case',
            }).deserialize(req.body);
            const getApplication = await application.findByPk(id);
            const updatetApplication = await getApplication.update(data);
            res.status(200).send(applicationSerializer.serialize(updatetApplication));
            next();
        } catch (error) {
            console.log(error);
            next('Server Error! We will fix this as soon as possible. If you have any questions, send an email at zubeir.mohamed@outlook.de. Thank you ');
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
            console.log(error);
            next('Server Error! We will fix this as soon as possible. If you have any questions, send an email at zubeir.mohamed@outlook.de. Thank you ');
        }
    },
};
