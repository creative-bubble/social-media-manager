const express = require('express');
const router = express.Router();
const groupController = require('../controllers/group');


/**
 * @swagger
 * /group:
 *    post:
 *      parameters:
 *          - name: name
 *            description: inputs from body
 *            in: body
 *            required: true
 *      description: request to create new group
 *      responses:
 *        '201':
 *            description: Group Successfuly Created
 */
router.post('/group', groupController.postAddGroup);


/**
 * @swagger
 * /group:
 *    get:
 *      description: request to fetch all groups
 *      responses:
 *        '202':
 *            description: Retrieved Groups Successfuly 
 */
router.get('/group', groupController.getGroups);


/**
 * @swagger
 * /group-update/{id}/{name}:
 *           put:
 *              description: request to update a group
 *              parameters:
 *                 - name: id
 *                   description: id of group
 *                   required: true
 *                   in: path
 *                 - name: name
 *                   description: name of group
 *                   required: true
 *                   in: path
 *              responses:
 *                '203':
 *                   description: Updated the group Successfuly
 */
router.put('/group-update/:groupId/:newName', groupController.putGroup);


/**
 * @swagger
 * /group-delete/{id}:
 *        delete:
 *              description: request to delete a group
 *              parameters:
 *                 - name: id
 *                   description: id of group
 *                   in: path
 *                   required: true
 *              responses:
 *                 '204':
 *                    description: Successfuly deleted the group
 */
router.delete('/group-delete/:groupId', groupController.deleteGroup);



module.exports = router;