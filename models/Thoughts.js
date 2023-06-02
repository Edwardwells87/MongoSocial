const { Schema, model } = require("mongoose");


const thoughts = new Schema(
  {
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
  },
);

const Thoughts = model('thought', thoughts);

module.exports = Thoughts;