/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: DataTypes.STRING,
        tel: DataTypes.STRING,
        location: DataTypes.JSONB,
        socials: DataTypes.ARRAY(DataTypes.JSONB),
    }, {});
    Company.associate = function (/* models */) {
    // associations can be defined here
    };
    return Company;
};
