'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('application', 'positionId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'position',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('application', 'positionId')
  }
};
