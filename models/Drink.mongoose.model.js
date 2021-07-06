'use strict';

const mongoose = require('mongoose')

const DrinksSchema = mongoose.Schema(
   {
    name:String,
    img: String,
  }
 
)
const DrinksModel = mongoose.model('drinks_collection', DrinksSchema);

module.exports = DrinksModel;