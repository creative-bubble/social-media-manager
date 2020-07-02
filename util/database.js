const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-user', 'root', '', {
 dialect: 'mysql',
 host: 'localhost'
});

module.exports = sequelize;