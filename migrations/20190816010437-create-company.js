
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Companies', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: Sequelize.STRING,
        tel: Sequelize.STRING,
        location: Sequelize.JSONB,
        social: Sequelize.ARRAY(Sequelize.JSONB),
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
    down: (queryInterface /* Sequelize */) => queryInterface.dropTable('Companies'),
};
