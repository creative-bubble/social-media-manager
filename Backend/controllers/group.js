const Group = require('../models/group');



exports.postAddGroup = (req, res) => {
    let name = req.body.name;
    Group.findAll({where:{name: name}})
    .then(groups => {
        if(groups.length > 0)
        {
            return res.send('Group already exist')
        }
        return Group.create({
            name: name
        })
    })
    .then(group => {
        return res.send(group);
     })
    .catch(err => {
        return res.send(err)
    })
};

exports.getGroups = (req, res) => {
    return Group.findAll()
    .then(group => {
        return res.send(JSON.stringify(group));
    })
    .catch(err => {
        return res.send(err)
    })
};


exports.putGroup = (req, res) => {
    let groupId = req.params.groupId;
    let name = req.params.newName;
    return Group.findByPk(groupId)
    .then(group => {
        group.name = name;
        return group.save();
    })
    .then(group => {
        return res.send(JSON.stringify(group));
    })
    .catch(err => {
        return res.send(err);
    })
};


exports.deleteGroup = (req, res) => {
    let groupId = req.params.groupId;
    return Group.findByPk(groupId)
    .then(group => {
        group.destroy();
        return res.send('deleted successfuly');
    })
    .catch(err => {
        return res.send(err);
    })
};