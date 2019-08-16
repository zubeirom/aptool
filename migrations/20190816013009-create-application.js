
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
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
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
        recruiter: {
            type: Sequelize.ARRAY(Sequelize.JSONB),
        },
        phases: {
            type: Sequelize.ARRAY(Sequelize.JSONB),
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
    down: (queryInterface /* Sequelize */) => queryInterface.dropTable('Applications'),
};
