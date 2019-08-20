
module.exports = {
    up: (queryInterface /* Sequelize */) => queryInterface.bulkInsert('company', [{
        name: 'Zubeirtech',
        email: 'zubeirtech@mail.com',
        tel: '12345',
        location: '{"street": "some street", "city": "New York"}',
        socials: '[{"facebook": "facebook"}]',
    }]),

    down: (queryInterface /* Sequelize */) => queryInterface.bulkDelete('company', null, {}),
};
