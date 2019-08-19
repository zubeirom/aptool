
module.exports = {
    up: (queryInterface /* Sequelize */) => queryInterface.bulkInsert('application', [{
        accountId: 9,
        companyId: 1,
        status: {
            name: 'Submitted',
            color: 'green',
        },
        submissionType: 'Online',
        source: 'Indeed',
        recruiters: [{ name: 'blablab' }],
        positionId: 1,
    }]),

    down: (queryInterface /* Sequelize */) => {
        queryInterface.bulkDelete('application', null, {});
    },
};
