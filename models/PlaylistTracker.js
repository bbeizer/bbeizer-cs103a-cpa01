'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var PlaylistTrackerSchema = Schema( {
  playlistId: ObjectId,
} );

module.exports = mongoose.model( 'PlaylistTracker', PlaylistTrackerSchema );
