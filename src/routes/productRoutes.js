const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.findAllProducts);
router.post('/', productController.createProducts);
router.put('/:id', productController.updateProducts);
router.delete('/:id', productController.deleteProducts);


module.exports = router;