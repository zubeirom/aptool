
module.exports = {
    up: (queryInterface /* Sequelize */) => queryInterface.bulkInsert('application', [{
        account_id: 9,
        company: 'Zubeirtech',
        status: '{ "name": "Submitted", "color": "green"}',
        submissionType: 'Online',
        source: 'Indeed',
        recruiters: '[{ "name": "blablab" }]',
        occupation: 'Frontend Developer',
    }]),

    down: (queryInterface /* Sequelize */) => {
        queryInterface.bulkDelete('application', null, {});
    },
};
