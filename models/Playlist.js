'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var PlaylistSchema = Schema( {
  userId: ObjectId,
  songId: ObjectId,
  playlistName: String,
} );

module.exports = mongoose.model( 'Playlist', PlaylistSchema );
