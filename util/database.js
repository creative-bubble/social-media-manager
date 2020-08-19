const Sequelize = require('sequelize');

//dotenv
require('dotenv').config();
sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
   }),

// sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
//     dialect: process.env.DB_DIALECT || 'postgres',
//     host: process.env.DB_HOST,
//     logging: false
// })

module.exports = sequelize;