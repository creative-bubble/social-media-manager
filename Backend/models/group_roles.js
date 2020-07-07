const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Group = require('./group');

const GroupRole = sequelize.define('GroupRole',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
})

module.exports = GroupRole;