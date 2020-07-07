const Sequelize = require('sequelize');

//dotenv
require('dotenv').config();
let dbName = process.env.DB_NAME;
let dbHost = process.env.DB_HOST;
let dbUser = process.env.DB_USER;
let dbPass = process.env.DB_PASS;


const sequelize = new Sequelize(dbName, dbUser, dbPass, {
 dialect: 'mysql',
 host: dbHost
});

module.exports = sequelize;