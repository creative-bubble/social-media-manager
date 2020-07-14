const Sequelize = require('sequelize');

//dotenv
require('dotenv').config();
sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
   }),

module.exports = sequelize;