const Sequelize = require('sequelize');
const database = require('../config/db');

const Order = database.db.define ('Order', {
    idOrder: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    products: {
        type: Sequelize.JSON,
        allowNull: false
    }
});

module.exports = Order;