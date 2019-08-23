const JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = {
    serialize(data) {
        const eventSerializer = new JSONAPISerializer('event', {
            attributes: ['name', 'location', 'contact_person', 'application_id', 'date', 'note', 'application'],
            application: {
                ref: 'id',
                attributes: ['account_id', 'company', 'created', 'status', 'source', 'recruiter', 'phases', 'occupation', 'deadline', 'note'],
            },
        });
        return eventSerializer.serialize(data);
    },
};
