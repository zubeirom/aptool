
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn('application', 'recruiter', Sequelize.JSONB),

    down: (queryInterface /* Sequelize */) => queryInterface.removeColumn('application', 'recruiter'),
};
