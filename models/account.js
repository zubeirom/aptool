/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('account', {
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        statuses: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
        },
        job_keywords: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
        },
    }, { freezeTableName: true, underscored: true });
    Account.associate = function (models) {
        Account.hasMany(models.application, { as: 'applications' });
    };
    return Account;
};
