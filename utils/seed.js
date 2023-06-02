const connection = require('../config/connection');
const {Users,Thoughts} = require('../models');
const {usersSeedData, thoughtsSeedData} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Users.deleteMany({})
  await Thoughts.deleteMany({});
const Users = []

})
