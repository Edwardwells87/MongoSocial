const { connect, connection } = require('mongoose');

const connectString = process.env.MONGODB_URI



mongoose.connect(connectString);

module.exports = connection;