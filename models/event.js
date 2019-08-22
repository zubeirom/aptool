/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
    const event = sequelize.define('event', {
        name: DataTypes.STRING,
        location: DataTypes.JSONB,
        contact_person: DataTypes.JSONB,
        application_id: {
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
        note: DataTypes.STRING(400),
    }, { underscored: true });
    event.associate = function (models) {
        event.belongsTo(models.application, { foreignKey: 'applicationId', as: 'application' });
    };
    return event;
};
