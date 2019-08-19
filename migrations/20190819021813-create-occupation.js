
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('occupation', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
        },
    }),
    down: (queryInterface /* Sequelize */) => queryInterface.dropTable('occupation'),
};
