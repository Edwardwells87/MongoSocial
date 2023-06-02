const Thoughts = require('../models'); 
const {ObjectId} = require('mongoose').Types;
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
      const thought = await Thoughts.findOne({ _id: req.params.thoughtid })
      .select('-__v');
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to find thought' });
    }
  },


  async createThought(thoughtData) {
    try {
      const thought = await Thoughts.create(thoughtData);
      return thought;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create thought');
    }
  },


  async deleteThought(thoughtId) {
    try {
      const result = await Thoughts.deleteOne({ _id: thoughtId });
      if (result.deletedCount === 1) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete thought');
    }
  },


  async updateThought(thoughtId, updatedData) {
    try {
      const result = await Thoughts.updateOne({ _id: thoughtId }, updatedData);
      if (result.modifiedCount === 1) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      throw new Error('Failed to update thought');
    }
  }
}
module.exports = thoughtsController