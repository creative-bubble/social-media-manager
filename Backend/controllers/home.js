const User = require('../models/user');

exports.getIndex = (req,res,next) => {
    User.findByPk(1)
    .then(user => {
        // console.log(JSON.stringify(user));
        let userInfo = JSON.stringify(user);
        res.send(userInfo);
    })
    .catch(err => {
        console.log(err);
    })
}