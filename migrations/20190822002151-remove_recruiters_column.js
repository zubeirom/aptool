
module.exports = {
    up: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'recruiters'),

    down: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'recruiters', Sequelize.ARRAy(Sequelize.JSONB)),
};
