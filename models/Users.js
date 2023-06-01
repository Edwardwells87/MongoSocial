const {Schema, model, Types} = require('mongoose');
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 1
        },
        email:{
            type: String,
            validate:{
                validator: function (v) {
                    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})$/.test(v);
                }
            },
            required: true,
            unique: true,
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref:'Thought',
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
    },
);

const User = model('User', users);

module.exports = User;