
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('application', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        account_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'account',
                key: 'id',
            },
        },
        company: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        created: {
            type: 'TIMESTAMP',
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        status: {
            type: Sequelize.JSONB,
        },
        submission_type: {
            type: Sequelize.STRING,
        },
        source: {
            type: Sequelize.STRING,
        },
        recruiters: {
            type: Sequelize.ARRAY(Sequelize.JSONB),
        },
        phases: {
            type: Sequelize.ARRAY(Sequelize.JSONB),
        },
        occupation: {
            type: Sequelize.STRING,
        },
        note: Sequelize.STRING,
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
    down: (queryInterface /* Sequelize */) => queryInterface.dropTable('application'),
};
