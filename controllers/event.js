const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
// eslint-disable-next-line global-require
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAwH4Tq9WrHY3LtgO9rElgg4MI9i8Tmhao',
});
require('dotenv').config();

const jwt = require('jsonwebtoken');
const { event } = require('../models');
const utils = require('../utils/index');
const { application } = require('../models');
const eventSerializer = require('../serializers/event');


module.exports = {

    async get(req, res, next) {
        try {
            const accessToken = utils.getAccessToken(req);
            const payload = await jwt.verify(accessToken, process.env.JWT_PRIVATE_KEY);
            const { id } = payload;
            const events = await event.findAll({
                include: [
                    {
                        model: application,
                        as: 'application',
                        where: {
                            account_id: id,
                        },
                    },
                ],
                order: [
                    ['date', 'DESC'],
                ],
                limit: 5,
            });
            res.status(200).send(eventSerializer.serialize(events));
            next();
        } catch (error) {
            console.log(error);
            next('Server Error! We will fix this as soon as possible. If you have any questions, send an email at zubeir.mohamed@outlook.de. Thank you ');
        }
    },

    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const findEvent = await event.findByPk(id, {
                include: [
                    {
                        model: application,
                        as: 'application',
                    },
                ],
            });
            const data = findEvent.dataValues;
            if (data.location) {
                const address = `${data.location.street}, ${data.location.postal_code}, ${data.location.city}`;
                googleMapsClient.geocode({
                    address,
                }, (err, response) => {
                    const loc = {
                        lat: response.json.results[0].geometry.location.lat,
                        lng: response.json.results[0].geometry.location.lng,
                    };
                    data.geometry = loc;


                    console.log(data);
                    res.status(200).send(eventSerializer.serialize(data));
                    next();
                });
            }
        } catch (error) {
            console.log(error);
            next('Server Error! We will fix this as soon as possible. If you have any questions, send an email at zubeir.mohamed@outlook.de. Thank you ');
        }
    },
    async add(req, res, next) {
        try {
            const data = await new JSONAPIDeserializer({
                keyForAttribute: 'underscore_case',
            }).deserialize(req.body);
            const saveEvent = await event.create(data);
            res.status(200).send(eventSerializer.serialize(saveEvent));
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
            const getEvent = await event.findByPk(id);
            const updateEvent = await getEvent.update(data);
            res.status(200).send(eventSerializer.serialize(updateEvent));
            next();
        } catch (error) {
            console.log(error);
            next('Server Error! We will fix this as soon as possible. If you have any questions, send an email at zubeir.mohamed@outlook.de. Thank you ');
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const getEvent = await event.findByPk(id);
            await getEvent.destroy();
            res.status(204).send({});
            next();
        } catch (error) {
            console.log(error);
            next('Server Error! We will fix this as soon as possible. If you have any questions, send an email at zubeir.mohamed@outlook.de. Thank you ');
        }
    },
};
