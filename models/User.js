'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var userSchema = Schema( {
  firstname: String,
  lastname: String,
  age: String
} );

module.exports = mongoose.model( 'User', userSchema );
