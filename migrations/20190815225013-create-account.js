
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Accounts', {
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
        tel: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.ARRAY(Sequelize.JSONB),
        },
        social: {
            type: Sequelize.ARRAY(Sequelize.JSONB),
            defaultValue: '{}',
        },
        jobKeyword: {
            type: Sequelize.ARRAY(Sequelize.STRING),
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    }),
    down: (queryInterface /* Sequelize */) => queryInterface.dropTable('Accounts'),
};
