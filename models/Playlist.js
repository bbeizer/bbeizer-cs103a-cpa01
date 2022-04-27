'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var PlaylistSchema = Schema( {
  playlistName: String,
  songId: ObjectId,
} );

module.exports = mongoose.model( 'Playlist', PlaylistSchema );
