
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
        created_at: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    }),
    down: (queryInterface /* Sequelize */) => queryInterface.dropTable('company'),
};
