const { Schema, model } = require("mongoose");

const reactionsSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => new Date(createdAtVal).toLocaleDateString(),
  },
});
const thoughts = new Schema({
  thought_body: {
    type: String,
    required: true,
    maxLength: 300,
    minLength: 5,
  },
  username: {
    type: String,
    minLength: 1,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => new Date(createdAtVal).toLocaleDateString(),
  },
  reactions: [reactionsSchema],
},{ toJSON: { virtuals: true }, id: false });
thoughts.virtual("reactionCount").get(function () {
  return this.reactions.length
});
const Thoughts = model("thought", thoughts);

module.exports = Thoughts;
