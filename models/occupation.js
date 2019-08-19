/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
    const occupation = sequelize.define('occupation', {
        name: DataTypes.STRING,
    }, {});
    occupation.associate = function (/* models */) {
    // associations can be defined here
    };
    return occupation;
};
