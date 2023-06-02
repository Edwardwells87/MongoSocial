const { Users } = require('../models');
const {ObjectId} = require('mongoose').Types;
 const userController = {
//   async findOneUser(req, res) {
//     try {
//       const user = await Users.findOne({ _id: req.params.userId })
//         .select('-__v')
//       res.json(user);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to find user' });
//     }
//   },
//i need to make a better async function that finds a single user by id
async findOneUser(req, res) {
  try {
    const user = await Users.findOne({ _id: req.params.usersId }).select('-__v');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to find user' });
  }
},




  async findAllUsers(req, res) {
    try {
      const users = await Users.find().select('-__v');
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to find users' });
    }
  },

  async createUser(req, res) {
    try {
      const user = await Users.create(req.body);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  async deleteUser(req, res) {
    try {
      const { userId } = req.params;
      const result = await Users.deleteOne({ _id: req.params.userId });
      if (result.deletedCount === 1) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  },

  async updateUser(req, res) {
    try {
      const { userId } = req.params;
      const updateData = req.body;
      const result = await Users.updateOne({ _id: userId }, updateData);
      if (result.modifiedCount === 1) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update user' });
    }
  },
};

module.exports = userController;
