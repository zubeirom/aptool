
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'status', { type: Sequelize.STRING, defaultValue: 'In Progress' }),

    down: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'status'),
};
