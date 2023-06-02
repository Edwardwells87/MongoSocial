const connection = require('../config/connection');
const dotenv = require('dotenv');
const { usersSeedData, thoughtsSeedData } = require('./data.js');
const { Users, Thoughts } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  
  await Users.deleteMany({});

  
  await Thoughts.deleteMany({});

  
  await Users.insertMany(usersSeedData);

  
  await Thoughts.insertMany(thoughtsSeedData);

  console.table(Users);
  console.table(Thoughts);
  console.info('finally we have seeded');
  process.exit(0);
});