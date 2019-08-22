
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'deadline', Sequelize.DATE),

    down: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'deadline'),
};
