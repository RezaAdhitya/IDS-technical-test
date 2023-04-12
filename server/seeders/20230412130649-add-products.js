'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = require('../../viewData.json').data.map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })

    return queryInterface.bulkInsert("Products", data, {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products",null,null)
  }
};
