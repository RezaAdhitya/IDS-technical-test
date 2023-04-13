'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Status, {foreignKey: 'status'})
    }
  }
  Product.init({
    productID: DataTypes.STRING,
    productName: DataTypes.STRING,
    amount: DataTypes.STRING,
    customerName: DataTypes.STRING,
    status: DataTypes.INTEGER,
    transactionDate: DataTypes.STRING,
    createBy: DataTypes.STRING,
    createOn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};