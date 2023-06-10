// Import required modules and models
const express = require('express');
const router = express.Router();
const thoughtsController = require('../../controllers/thoughtsController');


router.get('/', thoughtsController.findAllThoughts);
router.get('/:id', thoughtsController.findOneThought);
router.post('/', thoughtsController.createThought);
router.put('/:id', thoughtsController.updateThought);
router.delete('/:id', thoughtsController.deleteThought);
router.post('/:id/reactions', thoughtsController.addReaction)
router.delete('/:id/reactions/:reactionId',thoughtsController.deleteReaction)

module.exports = router;