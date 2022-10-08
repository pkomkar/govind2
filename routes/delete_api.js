const express = require('express');
const {deleteAlluser} = require('../controller/user_controller');
const router = express.Router();
// Setting up multer as a middleware to grab photo uploads

// POST - Add Image to Cloud Storage
router.route('/deleteAlluser').delete(deleteAlluser);


module.exports = router