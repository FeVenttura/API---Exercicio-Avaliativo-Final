const express = require('express');
const router = express.Router();

const orderItemController = require('../controllers/orderItemController');

// router.get('/', orderController.findAllOrders);
router.post('/', orderItemController.createOrderItem);
// router.put('/:id', orderController.updateOrders);
// router.delete('/:id', orderController.deleteOrders);

module.exports = router;