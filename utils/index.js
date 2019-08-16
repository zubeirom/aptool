const bcrypt = require('bcryptjs');

module.exports = {
    // Get access token from header
    getAccessToken(req) {
        const header = req.get('Authorization');
        const tokenarr = header.split(' ');
        return tokenarr[1];
    },

    hash(password) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    },
};
