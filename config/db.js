const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // get the string from config/default.json

// connect to database via mongoose - returns promise
// mongoose.connect(db);

async function connectDB() {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;
