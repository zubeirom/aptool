
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
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'company',
                key: 'id',
            },
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
            allowNull: false,
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
    down: (queryInterface /* Sequelize */) => queryInterface.dropTable('application'),
};
