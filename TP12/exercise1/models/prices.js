"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var pricesSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Products'
  },
  price: Number,
  
}, {
  timestamps: true,
});

pricesSchema.index({ source: 'text'});
var Prices = mongoose.model('Prices', pricesSchema);
module.exports = Prices;
