//models
const User = require('../models/user');
const Group = require('../models/group');
const Role = require('../models/roles');
const groupRole = require('../models/group_roles');

const association = () => {
    User.belongsTo(Group);
    Group.hasMany(User);

    Group.belongsToMany(Role, {through: groupRole});
    Role.belongsToMany(Group, {through: groupRole});
}


module.exports = association;