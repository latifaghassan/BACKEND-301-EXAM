'use strict';

const DrinksModel = require('../models/Drink.mongoose.model')

function DeleteFavData (req,res) {
 
  let name = req.body.name;
  DrinksModel.deleteOne({name}, (err,data)=> {
    DrinksModel.find({}, (err,data) => {
      if (err) {
        res.status(500).send(err.message)
      }else {
        res.send(data);
      }
    })
  })
   
}
 

module.exports = DeleteFavData;
