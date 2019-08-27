
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.changeColumn('account', 'job_keywords', {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
    }),

    down: (queryInterface, Sequelize) => queryInterface.changeColumn('account', 'job_keywords', {
        type: Sequelize.ARRAY(Sequelize.STRING),
    }),
};
