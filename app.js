//npm packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
//routes
const homeRoutes = require('./routes/home');
const groupRoutes = require('./routes/group');
const roleRoutes = require('./routes/roles');
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
app.use(homeRoutes);
app.use(groupRoutes);
app.use(roleRoutes);

app.use((err,req,res,next) => {
    res.send(JSON.stringify(err));
})


module.exports = app;