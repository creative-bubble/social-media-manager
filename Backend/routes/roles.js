const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roles');



/**
 * @swagger
 * /roles:
 *    post:
 *      parameters:
 *         - name: name
 *           description: name of role 
 *           in: body
 *           required: true
 *      description: request to add role
 *      responses:
 *         '205':
 *            description: Role added succussfuly
 */
router.post('/roles', roleController.postAddRole);


/**
 * @swagger
 * /roles:
 *     get:
 *       description: request to fetch all roles
 *       responses:
 *          '206':
 *            description: Roles fetched successfuly
 */
router.get('/roles', roleController.getRoles);


/**
 * @swagger
 * /roles-update/{name}/{newName}:
 *      put: 
 *        parameters:
 *           - name: name
 *             description: name of role
 *             required: true
 *             in: path
 *           - name: newName
 *             description: new name of role
 *             required: true
 *             in: path
 *        description: request to update role
 *        responses:
 *               '207':
 *                   description: Role updated successfuly 
 */
router.put('/roles-update/:name/:newName', roleController.putRole);


/**
 * @swagger
 * /roles-delete/{name}:
 *      delete:
 *          parameters:
 *            - name: name
 *              description: name of the role to be deleted
 *              in: path
 *              required: true
 *          description: request to delete a role
 *          responses:
 *             '208':
 *                description: Role successfuly deleted
 */
router.delete('/roles-delete/:name', roleController.deleteRole);

module.exports = router;