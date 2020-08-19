//local modules
const app = require('./app');
require('dotenv').config();
let port = process.env.PORT || 9000;


app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});
