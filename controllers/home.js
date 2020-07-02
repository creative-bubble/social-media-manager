const User = require('../models/user');

exports.getIndex = (req,res,next) => {
    User.findByPk(1)
    .then(user => {
        res.render('index', {
            user: user
        });
    })
    .catch(err => {
        console.log(err);
    })
}