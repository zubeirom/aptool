
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'posting_url', Sequelize.STRING),

    down: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'posting_url'),
};
