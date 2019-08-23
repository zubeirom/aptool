const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
const { event } = require('../models');
const eventSerializer = require('../serializers/event');

module.exports = {
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
};
