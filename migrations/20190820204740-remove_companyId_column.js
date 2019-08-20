
module.exports = {
    up: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'companyId'),

    down: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'companyId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'company',
            key: 'id',
        },
    }),
};
