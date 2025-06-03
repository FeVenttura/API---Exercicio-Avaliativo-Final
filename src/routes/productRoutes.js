const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/product', productController.findAllUsers);
router.post('/product', productController.createUsers);
router.put('/product', productController.updateUsers);
router.delete('/prodcut', productController.deleteUsers);

module.exports = router;