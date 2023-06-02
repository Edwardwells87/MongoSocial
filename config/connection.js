const { connect, connection } = require('mongoose');
const mongoose = require('mongoose');
require('dotenv').config();
const connectString = process.env.mongoURL



mongoose.connect(connectString);

module.exports = connection;