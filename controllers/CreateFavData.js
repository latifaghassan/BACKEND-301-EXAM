'use strict';


const DrinksModel = require('../models/Drink.mongoose.model')

function CreateFavData (req,res) {
  // destructure
  const {name} = req.body;

  DrinksModel.find({name:name}, (err,data)=> {
    if (err) {
       res.status(500).send("err.message")
    }else{
      if (data.length = 0) {
        const newData = new DrinksData ({
          name,
          img,
        })
        newData.save();
      }
    }
  })
   
  
} 

module.exports = CreateFavData;
