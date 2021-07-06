'use strict';

const DrinksModel = require('../models/Drink.mongoose.model')

function GetFavData (req,res) {
  DrinksModel.find( {}, (err,data) => {
   if (err) {
     res.status(500).send('err.message');
   }else {
     res.send(data);
   }

  })
   
  
} 

module.exports = GetFavData;


