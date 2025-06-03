const Sequelize = require('sequelize');
const database = require('../config/db');

const Product = database.db.define ('Product', {
    idProduct: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    idCategory: {
        type: Sequelize.INTEGER
    },
});

module.exports = Product;