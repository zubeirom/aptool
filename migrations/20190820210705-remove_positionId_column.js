
module.exports = {
    up: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'positionId'),

    down: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'positionId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'position',
            key: 'id',
        },
    }),
};
