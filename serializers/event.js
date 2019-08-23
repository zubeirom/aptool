const JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = {
    serialize(data) {
        const eventSerializer = new JSONAPISerializer('event', {
            attributes: ['name', 'location', 'contact_person', 'application_id', 'date', 'note'],
        });
        return eventSerializer.serialize(data);
    },
};
