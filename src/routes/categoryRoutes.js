const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

router.get('/category', categoryController.findAllUsers);
router.post('/category', categoryController.createUsers);
router.put('/category', categoryController.updateUsers);
router.delete('/category', categoryController.deleteUsers);

module.exports = router;