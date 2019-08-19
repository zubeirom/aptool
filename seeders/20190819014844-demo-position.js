
module.exports = {
    up: (queryInterface /* Sequelize */) => {
        queryInterface.bulkInsert('position', [{
            name: 'Software Developer',
        }]);
    },

    down: (queryInterface /* Sequelize */) => {
        queryInterface.bulkDelete('position', null, {});
    },
};
