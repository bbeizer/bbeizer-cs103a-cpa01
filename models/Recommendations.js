'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var recomendationSchema = Schema( {
  userId: ObjectId,
  songTitle: String,

  description:String,
  completed: Boolean,
  createdAt: Date,
} );

module.exports = mongoose.model( 'Recommendation', recomendationSchema  );
