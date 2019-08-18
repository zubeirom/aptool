/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
    const event = sequelize.define('event', {
        name: DataTypes.STRING,
        location: DataTypes.JSONB,
        contactPerson: DataTypes.JSONB,
        applicationId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'application',
                key: 'id',
            },
        },
        date: {
            type: 'TIMESTAMP',
            allowNull: false,
        },
    }, {});
    event.associate = function (models) {
        event.belongsTo(models.application, { foreignKey: 'applicationId', as: 'application' });
    };
    return event;
};
