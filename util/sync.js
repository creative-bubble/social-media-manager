const sequelize = require('./database');

//Associations
const associations = require('./association');
associations();

sequelize
.sync()
.then(() => {
    throw 'successfuly synced'
})
.catch(err => {
    console.log(err);
});