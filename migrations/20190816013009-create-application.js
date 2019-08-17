
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('application', {
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
                model: 'account',
                key: 'id',
            },
        },
        companyId: {
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
        position: {
            type: Sequelize.STRING,
            allowNull: false,
            references: {
                model: 'position',
                key: 'name'
            }
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
