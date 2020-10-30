var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

//Create a schema
var Users = new Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: [true, 'Email must be unique']
  },
  username: {
    type: String,
    required: [true, 'Please enter a username'],
    unique: [true, 'Usernames must be unique']
  },
  first_name: String,
  last_name: String,
  hash: {
    type: String,
    required: [
      true,   
      'There was a problem creating your password'
    ]
  },
  salt: {
    type: String,
    required: [
      true, 
      'There was a problem creating your password'
    ]
  },
  admin: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date.now
  }
});

//Add unique validation properties to the model
Users.plugin(uniqueValidator);

Users.pre('save', function(next){
    this.modified = new Date().toISOString();
    next();
});
module.exports  = mongoose.model('Users', Users);