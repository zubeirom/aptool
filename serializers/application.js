const JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = {
    serialize(data) {
        const ApplicationSerializer = new JSONAPISerializer('application', {
            attributes: ['account_id', 'company', 'created', 'status', 'submissionType', 'source', 'recruiters', 'phases', 'position', 'account'],
            account: {
                ref: 'id',
                attributes: ['username', 'firstname', 'lastname', 'email', 'statuses', 'jobKeywords', 'password'],

            },
        });

        return ApplicationSerializer.serialize(data);
    },
};
