
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'positionId', {
        type: Sequelize.INTEGER,
        references: {
            model: 'position',
            key: 'id',
        },
    }),

    down: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'positionId'),
};
