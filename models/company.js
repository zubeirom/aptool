/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: DataTypes.STRING,
        tel: DataTypes.STRING,
        location: DataTypes.JSONB,
        social: DataTypes.ARRAY(DataTypes.JSONB),
    }, {});
    Company.associate = function (/* models */) {
    // associations can be defined here
    };
    return Company;
};
