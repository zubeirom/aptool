
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('event', {
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
        contact_person: {
            type: Sequelize.JSONB,
        },
        application_id: {
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
        created_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface /* Sequelize */) => queryInterface.dropTable('event'),
};
