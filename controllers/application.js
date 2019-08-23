const jwt = require('jsonwebtoken');
const fs = require('fs');
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
const utils = require('../utils/index');
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
            const findApplications = await application.findAll({
                where: {
                    account_id: id,
                },
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
            res.status(200).send(applicationSerializer.serialize(data));
            next();
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
            const data = await new JSONAPIDeserializer().deserialize(req.body);
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
            const data = await new JSONAPIDeserializer().deserialize(req.body);
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
