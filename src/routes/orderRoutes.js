const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.get('/order', orderController.findAllOrders);
router.post('/order', orderController.createOrders);
router.put('/order', orderController.updateOrders);
router.delete('/order', orderController.deleteOrders);

module.exports = router;