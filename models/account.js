/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
        },
        tel: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        social: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            defaultValue: '{}',
        },
        job_keyword: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
    }, {});
    Account.associate = function (/* models */) {
    // associations can be defined here
    };
    return Account;
};
