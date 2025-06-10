const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');
const OrderItemController = require('../controllers/orderItemController');

router.get('/', orderController.findAllOrders);
router.post('/', orderController.createOrders);
router.put('/:id', orderController.updateOrders);
router.delete('/:id', orderController.deleteOrders);

// OrderItem
router.post('/:idOrder/item', OrderItemController.createOrderItem)

module.exports = router;