
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'status', Sequelize.STRING),

    down: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'status'),
};
