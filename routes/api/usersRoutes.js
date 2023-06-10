// Import required modules and models
const express = require('express');
const router = express.Router();

const  userController = require('../../controllers/usersController')


router.get('/', userController.findAllUsers);
router.get('/:id', userController.findOneUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/:id/friends/:friendId', userController.addFriend);
router.delete('/:id/friends/:friendId', userController.removeFriend);


module.exports = router;
