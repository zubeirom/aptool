const JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = {
    serialize(data) {
        const ApplicationSerializer = new JSONAPISerializer('application', {
            attributes: ['accountId', 'companyId', 'created', 'status', 'submissionType', 'source', 'recruiters', 'phases', 'positionId'],
        });

        return ApplicationSerializer.serialize(data);
    },
};
