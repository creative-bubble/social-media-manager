const Sequelize = require('sequelize');
// const { Pool } = require('pg');

//dotenv
require('dotenv').config();
sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
   }),

module.exports = sequelize;