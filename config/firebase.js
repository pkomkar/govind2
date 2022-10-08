const firebase = require('firebase-admin');
// Importing our configuration to initialize our app
const config = require('../config/config');
// Creates and initializes a Firebase app instance. Pass options as param
const db = firebase.initializeApp(config.firebaseConfig);
module.exports = db;
