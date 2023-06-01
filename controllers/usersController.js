const {Users, Thoughts} = require('../models');


async function findOneUser(userId) {
  try {
    const user = await User.findOne({ _id: userId });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to find user');
  }
}


async function findAllUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to find users');
  }
}


async function createUser(userData) {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create user');
  }
}


async function deleteUser(userId) {
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
}


async function updateUser(userId, updatedData) {
  try {
    const result = await User.updateOne({ _id: userId }, updatedData);
    if (result.modifiedCount === 1) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update user');
  }
}
