// sconst jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

module.exports = {
    // Get access token from header
    getAccessToken(req) {
        const header = req.get('Authorization');
        const tokenarr = header.split(' ');
        return tokenarr[1];
    },
    // TODO: Make jwt sign function
    jwtSign() { },
    // TODO: Make jwt verify function
    jwtVerify() { },
    // TODO: Make bcrypt hash for password
    hash() { },
    // TODO: Check hash with password
    comparePassword() {},
};
