const { Thoughts } = require('../models');
const { ObjectId } = require('mongoose').Types;
const thoughtsController = {
  // async findOneThought(thoughtId) {
  //   try {
  //     const thought = await Thought.findOne({ _id: thoughtId });
  //     return thought;
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('Failed to find thought');
  //   }
  // },
  async findAllThoughts(req, res) {
    try {
      const thoughts = await Thoughts.find();
      res.json(thoughts);
    } catch (error) {
      console.error(error);
      // res.status(500).json({ error: 'Failed to find thoughts' });
    }
  },



  // async findAllThoughts() {
  //   try {
  //     const thoughts = await Thought.findAll();
  //     return thoughts;
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('Failed to find thoughts');
  //   }
  // },
  async findOneThought(req, res) {
    try {
      const thought = await Thoughts.findOne({ _id: req.params.id })
        .select('-__v');
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'path has failed completely' });
    }
  },


  async createThought(req, res) {
    try {
      const thought = await Thoughts.create(req.body);
      res.json(thought);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create thought');
    }
  },


  async deleteThought(req, res) {
    try {
      const deletedThought = await Thoughts.deleteOne(req.params.thoughtId);
      if (!deletedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      } res.json(deletedThought)
    } catch (error) {
      console.error(error);
      throw new Error('Failed to perform the delete operation');
    }
  },

  // async updateThought(req, res) {
  //   console.log(req.params);
  //   try {
  //     const updatedThought = await Thoughts.findOneAndUpdate(
  //       { _id: req.params.thoughtId },
  //       { thought_body: req.body.thought_body },
  //       { new: true }
  //     );
  //     if (!updatedThought) {
  //       return res.status(404).json({ error: 'Thought not found' });
  //     }

  //     res.json({ updatedThought });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Failed to update thought' });
  //   }
  // },

  //need to create a findById function for thoughts
  async updateThought(req, res) {
    try {
      const updatedThought = await Thoughts.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedThought) {
        return res.status(404).json(req.params.id);
      }
      return res.status(200).json(updatedThought);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

async addReaction(req, res) {
  try {
    const friend = await Thoughts.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { reactions: req.body} },
      { new: true }
    );
    if (!friend) {
      return res.status(404).json({ error: 'Friend not found' });
    }
    res.json(friend);
  } catch (error) { 
    console.error(error);
    res.status(500).json({ error: 'Failed to add friend' });
  }
},
async removeFriend(req, res) {
  try {
    const friend = await Users.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { reactions: {_id:req.params.reactionId }} },
      { new: true }
    );
    if (!friend) {
      return res.status(404).json({ error: 'Friend not found' });
    }
    res.json(friend);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to remove friend' });
  }
}

};
module.exports = thoughtsController