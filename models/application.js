/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define('application', {
        accountId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'account',
                key: 'id',
            },
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'company',
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
        positionId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'position',
                key: 'name'
            }
        },
    }, { freezeTableName: true });
    Application.associate = function (models) {
        Application.belongsTo(models.account, { foreignKey: 'accountId', as: 'account' });
        Application.hasOne(models.position, { foreignKey: 'positionId', as: 'position'})
    };
    return Application;
};
