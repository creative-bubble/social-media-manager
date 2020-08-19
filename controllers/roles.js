const Role = require('../models/roles');



exports.postAddRole = (req,res) => {
    const name = req.body.name;
    Role.findAll({where:{name: name}})
    .then(roles => {
        if(roles.length > 0 ){
            return res.send('role already existing');
        }
        return Role.create({
            name:name
        })
    })
    .then(role => {
        return res.send(role);
    })
    .catch(err =>{
        return res.send(err);
    });
};


exports.getRoles = (req,res) => {
    Role.findAll()
    .then(roles => {
        if(roles.length > 0){
            return res.send(roles);
        }
        return res.send('no roles available');
    })
    .catch(err => {
        return res.send(err);
    });
};


exports.putRole = (req,res) => {
    const name = req.params.name;
    const newName = req.params.newName
    Role.findAll({where: {name:name}})
    .then(roles => {
        if(roles.length > 0){
            roles[0].name = newName;
            return roles[0].save();
        }
        return res.send('no roles with that name');
    })
    .then(role => {
        return res.send(role);
    })
    .catch(err => {
        return res.send(err);
    })
};

exports.deleteRole = (req,res) => {
    const name = req.params.name;
    Role.findAll({where: {name:name}})
    .then(roles => {
        if(roles.length > 0){
            roles[0].destroy();
            return res.send('successfuly deleted');
        } 
        return res.send('no role with this name');
    })
    .catch(err => {
        return res.send(err);
    })
}