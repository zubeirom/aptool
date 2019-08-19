/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
    const position = sequelize.define('position', {
        name: DataTypes.STRING,
    }, {});
    position.associate = function (/* models */) {
    // associations can be defined here
    };
    return position;
};
