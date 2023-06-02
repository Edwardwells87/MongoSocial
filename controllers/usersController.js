const { User, Thought } = require('../models');

const userController = {

async findOneUser(userId) {
  try {
    const user = await User.findOne({ _id: userId });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to find user');
  }
},


async findAllUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to find users');
  }
},


async createUser(userData) {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create user');
  }
},


async deleteUser(userId) {
  try {
    const result = await User.deleteOne({ _id: userId });
    if (result.deletedCount === 1) { 
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete user');
  }
},


async updateUser(userId, updateData) {
  try {
    const result = await User.updateOne({ _id: userId }, updateData);
    if (result.modifiedCount === 1) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update user');
  }
},
}
module.exports = userController;