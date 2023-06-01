const { Schema, model } = require("mongoose");


const thoughts = new Schema(
  {
    thought_body: {
      type: String,
      required: true,
     maxLength: 100,
      minLength: 5,
    },
    username: {
      type: String,
      minLength: 8,
      required: true,
    },
  },
);

const Thoughts = model('thought', thoughtsModel);

module.exports = Thoughts;