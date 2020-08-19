const Group = require('../models/group');



exports.postAddGroup = async (req, res, next) => {
    let name = req.body.name;
    try{
        let groups = await Group.findAll({where:{name:name}});
        if(groups.length > 0)
            throw ({error: 'error', type: 'exist', message: 'group already exist', statusCode: 409});
    }catch(err){
       return next(err);
    }
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



exports.getGroups = async (req, res, next) => {
    let groups = await Group.findAll();
    try{
        return res.status(200).json(groups);
    }
    catch(err){
        next(err);
    }
};


exports.putGroup = (req, res, next) => {
    let groupId = req.params.groupId;
    let name = req.params.newName;
    return Group.findByPk(groupId)
    .then(group => {
        group.name = name;
        return group.save();
    })
    .then(group => {
        return res.status(201).json(group);
    })
    .catch(err => {
        next(err);
    })
};


exports.deleteGroup = (req, res, next) => {
    let groupId = req.params.groupId;
    return Group.findByPk(groupId)
    .then(group => {
        group.destroy();
        return res.status(202).send('group deleted successfuly');
    })
    .catch(err => {
        next(err);
    })
};