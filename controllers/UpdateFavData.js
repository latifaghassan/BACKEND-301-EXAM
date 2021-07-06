'use strict';


const DrinksModel = require('../models/Drink.mongoose.model')

function updateFavData (req,res) {
 

  const {name,img} = req.body;


  DrinksModel.updateOne( {name:name, img:img}, (err,data) => {
    DrinksModel.find({}, (err,data)=> {
      if (err) {
        res.status(500).send("err.message")
      }else {
        res.send(data)
      }
    })
  })
   
  
} 

module.exports = updateFavData;
