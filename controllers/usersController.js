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
    const user = await Users.findOne(req.params.userId)
    
    if (!user) {
      return res.status(404).json({ error:req.paras.userId + "User not found"});
      
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'path has completely failed to function' });
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
      const deleted = await Users.findOneAndDelete(req.params.userId);
     if(!deleted){
       return res.status(404).json({error: "User not found"});
     } 
      res.json(deleted);
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
async addFriend(req, res) {
  try {
    const friend = await Users.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { friends: req.params.friendId } },
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
      { $pull: { friends: req.params.friendId } },
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

module.exports = userController;
