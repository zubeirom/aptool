const JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = {
    serialize(data) {
        const AccountSerializer = new JSONAPISerializer('accounts', {
            attributes: ['username', 'firstname', 'lastname', 'email', 'statuses', 'jobKeywords'],
        });

        return AccountSerializer.serialize(data);
    },
};
