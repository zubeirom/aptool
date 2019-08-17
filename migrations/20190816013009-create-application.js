
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Applications', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        accountId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Account',
                key: 'id',
            },
        },
        companyId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Company',
                key: 'id',
            },
        },
        created: {
            type: Sequelize.TIMESTAMP,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        status: {
            type: Sequelize.JSONB,
        },
        submissionType: {
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
    down: (queryInterface /* Sequelize */) => queryInterface.dropTable('Applications'),
};
