
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('account', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: true,
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        statuses: {
            type: Sequelize.ARRAY(Sequelize.JSONB),
        },
        jobKeywords: {
            type: Sequelize.ARRAY(Sequelize.STRING),
        },
        createdAt: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    }),
    down: (queryInterface /* Sequelize */) => queryInterface.dropTable('account'),
};
