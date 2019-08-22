
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'deadline', Sequelize.DATEONLY),

    down: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'deadline'),
};
