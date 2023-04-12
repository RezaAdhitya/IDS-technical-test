const express = require('express')
const MainController = require('../controllers/mainController')
const router = express.Router()

// Get product endpoint
router.get('/', MainController.getProduct)

// Add product endpoint
router.post('/add', MainController.addProduct)

// Edit product endpoint
router.put('/edit/:id', MainController.editProduct)

// Detail product endpoint
router.get('/:id', MainController.detailProduct)

module.exports = router