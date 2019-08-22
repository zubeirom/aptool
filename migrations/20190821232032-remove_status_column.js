
module.exports = {
    up: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'status'),

    down: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'status', Sequelize.STRING),
};
