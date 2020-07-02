//imports from 3rd party packages
const express = require('express');
//import from local modules
const homeController = require('../controllers/home');
//variables
const router = express.Router();

router.get('/', homeController.getIndex);


module.exports = router;