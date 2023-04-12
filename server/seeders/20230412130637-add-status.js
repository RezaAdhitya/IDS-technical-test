'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = require('../../viewData.json').status.map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })

    return queryInterface.bulkInsert("Statuses", data, {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Statuses", null, null)
  }
};
