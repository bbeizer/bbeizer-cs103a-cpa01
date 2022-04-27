'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var songSchema = Schema( {
    title: String,
    artist: String,
    genre: String,
    album: String,
    songLength: String,


} );

module.exports = mongoose.model( 'Song', songSchema );