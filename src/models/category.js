const Sequelize = require('sequelize');
const database = require('../config/db');

const Category = database.db.define ('Category', {
    idCategory: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameCategory: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    }
});

module.exports = Category;

