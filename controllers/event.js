const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
const { event } = require('../models');
const { application } = require('../models');
const eventSerializer = require('../serializers/event');

module.exports = {
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
            res.status(200).send(eventSerializer.serialize(data));
            next();
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
};
