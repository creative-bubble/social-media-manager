//models
const User = require('../models/user');
const Group = require('../models/group');

const association = () => {
    User.belongsTo(Group);
    Group.hasMany(User)
}


module.exports = association;