/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define('application', {
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'account',
                key: 'id',
            },
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created: {
            type: 'TIMESTAMP',
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'In Progress',
        },
        source: {
            type: DataTypes.STRING,
        },
        recruiter: {
            type: DataTypes.JSONB,
        },
        phases: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
        },
        occupation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        note: DataTypes.STRING,
        posting_url: DataTypes.STRING,
        deadline: DataTypes.DATE,
    }, { freezeTableName: true, underscored: true });
    Application.associate = function (models) {
        Application.belongsTo(models.account, { foreignKey: 'account_id', as: 'account' });
        Application.hasMany(models.event, { as: 'events' });
    };
    return Application;
};
