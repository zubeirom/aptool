const JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = {
    serialize(data) {
        const ApplicationSerializer = new JSONAPISerializer('application', {
            attributes: ['account_id', 'company', 'created', 'status', 'source', 'recruiter', 'phases', 'occupation', 'deadline', 'account', 'note'],
            account: {
                ref: 'id',
                attributes: ['username', 'firstname', 'lastname', 'email', 'statuses', 'jobKeywords', 'password'],

            },
        });

        return ApplicationSerializer.serialize(data);
    },
};
