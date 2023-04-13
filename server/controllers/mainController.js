const {Status, Product} = require('../models');

class MainController {
  static async getProduct(req, res) {
    /*
    SQL Query:
    SELECT
      * 
    FROM 
      "Products"
    */
    try {
      let data = await Product.findAll({
        attributes: {exclude: ['createdAt', 'updatedAt']},
        order: ['id']
      })
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({message: 'Internal server error'})
    }
  }

  static async addProduct(req, res) {
    /*
    SQL Query:
    INSERT INTO 
      "Products" (
        "id",
        "productID",
        "productName",
        "amount",
        "customerName",
        "status",
        "transactionDate",
        "createBy",
        "createOn",
        "createdAt",
        "updatedAt"
      ) 
    VALUES 
      (
        'id', 
        'productID', 
        'productName', 
        'amount', 
        'customerName', 
        'status', 
        'transactionDate', 
        'createBy', 
        'createOn', 
        'createdAt', 
        'updatedAt'
      )
    */
    try {
      let {formData} = req.body
      console.log(req);
      await Product.create(formData)
      res.status(201).json({message: "product created"})
    } catch (error) {
      res.status(500).json({message: 'Internal server error'})
    }
  }

  static async editProduct(req, res) {
    /*
    SQL Query:
    UPDATE 
      "Products"
    SET
      "id" = 'id', 
      "productID" = 'productID', 
      "productName" = 'productName',
      "amount" = 'amount',
      "customerName" = 'customerName',
      "status" = 'status',
      "transactionDate" = 'transactionDate',
      "createBy" = 'createBy',
      "createOn" = 'createOn',
      "createdAt" = 'createdAt',
      "updatedAt" = 'updatedAt'
    */
    try {
      let id = req.params.id
      let {formData} = req.body
      console.log(formData);
      await Product.update(formData, {
        where: {
          id
        }
      })
      res.status(200).json({message: "product updated"})
    } catch (error) {
      res.status(500).json({message: 'Internal server error'})
    }
  }

  static async detailProduct(req, res) {
    /*
    SQL Query:
    SELECT
      * 
    FROM 
      "Products" AS "Product"
     WHERE 
      "Product"."id" = '1';
    */
    try {
      let id = req.params.id
      let data = await Product.findOne({
        where: {id},
        attributes: {exclude: ['createdAt', 'updatedAt']}
      })
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({message: 'Internal server error'})
    }
  }
}

module.exports = MainController