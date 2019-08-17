/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define('Application', {
        accountId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Account',
                key: 'id',
            },
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Company',
                key: 'id',
            },
        },
        created: {
            type: 'TIMESTAMP',
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        status: {
            type: DataTypes.JSONB,
        },
        submissionType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        source: {
            type: DataTypes.STRING,
        },
        recruiters: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
        },
        phases: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
        },
    }, {});
    Application.associate = function (models) {
        Application.belongsTo(models.Account, { foreignKey: 'authorId', as: 'author' });
    };
    return Application;
};
