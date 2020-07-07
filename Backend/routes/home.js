//imports from 3rd party packages
const express = require('express');
//import from local modules
const homeController = require('../controllers/home');
//variables
const router = express.Router();



//Routes
/**
 * @swagger
 * /:
 *  get:
 *    description: Path to homepage with User name info
 *    responses:
 *      '200':
 *        description: A successful response
 * 
 */
router.get('/', homeController.getIndex);







module.exports = router;