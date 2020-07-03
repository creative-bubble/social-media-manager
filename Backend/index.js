//imports from 3rd party packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
//import from local modules
const sequelize = require('./util/database');
//models
const User = require('./models/user');
//routes
const homeRoutes = require('./routes/home');
//variables
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);

sequelize
.sync()
.then(() => {
    return User.findByPk(1);
})
.then(user => {
    if(!user){
        return User.create({
            name: "Marco",
            email: "marobutalid989@gmail.com"
        });
    }
    return user;
})
.then(() => {
    app.listen(9000);
})
.catch(err => {
    console.log(err);
})

