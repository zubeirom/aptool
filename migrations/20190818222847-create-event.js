
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('events', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
        },
        location: {
            type: Sequelize.JSONB,
        },
        contactPerson: {
            type: Sequelize.JSONB,
        },
        applicationId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'application',
                key: 'id',
            },
        },
        date: {
            type: 'TIMESTAMP',
            allowNull: false,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface /* Sequelize */) => queryInterface.dropTable('events'),
};
