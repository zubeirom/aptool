const JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = {
    serialize(data) {
        const ApplicationSerializer = new JSONAPISerializer('application', {
            attributes: ['account_id', 'company', 'created', 'status', 'source', 'recruiter', 'phases', 'occupation', 'deadline', 'account', 'note', 'events'],
            account: {
                ref: 'id',
                attributes: ['username', 'firstname', 'lastname', 'email', 'statuses', 'jobKeywords', 'password'],

            },
            events: {
                ref: 'id',
                attributes: ['name', 'location', 'contact_person', 'application_id', 'date', 'note'],
            },
        });

        return ApplicationSerializer.serialize(data);
    },
};
