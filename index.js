//local modules
const app = require('./app');
const associations = require('./util/association');
require('dotenv').config();
let port = process.env.PORT || 9000;

associations();

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});
