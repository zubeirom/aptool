
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'occupation', Sequelize.STRING),

    down: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'occupation'),
};
