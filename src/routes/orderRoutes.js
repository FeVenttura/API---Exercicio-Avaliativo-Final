const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.get('/order', orderController.findAllUsers);
router.post('/order', orderController.createUsers);
router.put('/order', orderController.updateUsers);
router.delete('/order', orderController.deleteUsers);

module.exports = router;