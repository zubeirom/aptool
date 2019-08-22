
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn('event', 'note', { type: Sequelize.STRING(400) }),

    down: (queryInterface /* Sequelize */) => queryInterface.removeColumn('event', 'note'),
};
