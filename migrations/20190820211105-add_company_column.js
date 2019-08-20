
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'company', Sequelize.STRING),

    down: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'company'),
};
