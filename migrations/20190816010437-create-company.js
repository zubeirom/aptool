
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('company', {
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
        socials: Sequelize.ARRAY(Sequelize.JSONB),
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
    down: (queryInterface /* Sequelize */) => queryInterface.dropTable('company'),
};
