//npm packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
//local modules
const sequelize = require('./util/database');
// const associations = require('./util/association');
//models
// const User = require('./models/user');
// //routes
// const homeRoutes = require('./routes/home');
// const groupRoutes = require('./routes/group');
// const roleRoutes = require('./routes/roles');
//swagger documentation
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//variables
const app = express();
require('dotenv').config();
let port = process.env.PORT || 9000;

//swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API',
            description: 'API DOCUMENTATION',
            contact: {
                name: "Marco Butalid"
            },
            servers: [`http://localhost:${port}`]
        }
    },
    apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));





//middleware setups
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));



//middleware routes
app.use('/', (req,res) => {
    res.send("<h1> Welcome</h1>");
    res.end();
})
// app.use(homeRoutes);
// app.use(groupRoutes);
// app.use(roleRoutes);


//Associations
// associations();



//init server
sequelize
.sync()
.then(res => {
    let port = process.env.PORT;
    if (port == null || port == "") {
    port = 8000;
}
    app.listen(port, () => {
        console.log(`Server listening on ${port}`)
    })
})
.catch(err => {
    console.log(err);
})

// sequelize
// // // .sync({force:true})
// // .sync()
// // .then(() => {
// //     return User.findByPk(1);
// // })
// // .then(user => {
// //     if(!user){
// //         return User.create({
// //             name: "Marco",
// //             email: "marobutalid989@gmail.com"
// //         });
// //     }
// //     return user;
// // })
// .then(() => {
//     app.listen(port, () => {
//         console.log(`Server listening on ${port}`)
//     });
// })
// .catch(err => {
//     console.log(sequelize);
//     console.log(err);
// });

