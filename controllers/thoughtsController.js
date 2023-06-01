const Thought = require('./models/Thought'); // 
async function findOneThought(thoughtId) {
  try {
    const thought = await Thought.findOne({ _id: thoughtId });
    return thought;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to find thought');
  }
}

async function findAllThoughts() {
  try {
    const thoughts = await Thought.find();
    return thoughts;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to find thoughts');
  }
}


async function createThought(thoughtData) {
  try {
    const thought = await Thought.create(thoughtData);
    return thought;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create thought');
  }
}


async function deleteThought(thoughtId) {
  try {
    const result = await Thought.deleteOne({ _id: thoughtId });
    if (result.deletedCount === 1) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete thought');
  }
}


async function updateThought(thoughtId, updatedData) {
  try {
    const result = await Thought.updateOne({ _id: thoughtId }, updatedData);
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