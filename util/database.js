const Sequelize = require('sequelize');
// const { Pool } = require('pg');

//dotenv
require('dotenv').config();
let dbName = process.env.DB_NAME;
let dbHost = process.env.DB_HOST;
let dbUser = process.env.DB_USER;
let dbPass = process.env.DB_PASS;

sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres'
   }),

module.exports = sequelize;