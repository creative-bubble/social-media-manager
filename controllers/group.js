const Group = require('../models/group');



exports.postAddGroup = async (req, res, next) => {
    let name = req.body.name;
    let groups = await Group.findAll({where:{name:name}});
    if(groups.length > 0)
        return res.status(409).json({error: 'error', type: 'exist', message: 'group already exist'});
    Group.create({
        name:name
    })
    .then(group => {
        return res.status(201).send(JSON.stringify({type: 'success', name: group.name, message: 'Created successfuly'}));
     })
    .catch(err => {
        next(err);
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