
module.exports = {
    up: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'submission_type'),

    down: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'submission_type', Sequelize.STRING),
};
