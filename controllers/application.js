const jwt = require('jsonwebtoken');
const fs = require('fs');
const utils = require('../utils/index');
const { application } = require('../models');
const applicationSerializer = require('../serializers/application');

const privateKey = fs.readFileSync('./config/private.key', 'utf8');


module.exports = {
    async get(req, res, next) {
        try {
            const accessToken = utils.getAccessToken(req);
            const payload = await jwt.verify(accessToken, privateKey);
            const { id } = payload;
            console.log(id);
            const findApplications = await application.findAll({
                where: {
                    accountId: id,
                },
            });
            console.log(findApplications);
            const data = findApplications.dataValues;
            res.status(200).send(applicationSerializer.serialize(data));
            next();
        } catch (error) {
            next(error);
        }
    },
};
