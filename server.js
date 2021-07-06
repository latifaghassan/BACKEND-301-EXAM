'use strict'; 

//1- Include our require installed packages.
const express = require('express'); 
const cors = require('cors')
require('dotenv').config();


//2- Initialize the server packages.
const server = express();

//3- Define the port.
const PORT = process.env.PORT
//4- Define our middleware.

//5- Enable cors
server.use(cors());

//6- Enable JSON data.
server.use(express.json());

//7- Define our routes , Proof of life endpoint

// http://localhost:8080

server.get('/', (req,res) => {
  res.send('HELLO WORLD')
})

//8- Use mongoose , Require monogoose.

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/DB_NAME',{ useNewUrlParser: true, useUnifiedTopology: true });

//9- Draw our general model.
//10- Draw our Mongo Schemes and models.

//11- Define our CRUD application.

const getData = require('./controllers/GetData');
const GetFavData = require('./controllers/GetFavData');
const CreateFavData = require('./controllers/CreateFavData');
const DeleteFavData = require('./controllers/DeleteFavData');
const updateFavData = require('./controllers/UpdateFavData');


server.get("/drinks" ,  getData)
server.get("/drinks/fav", GetFavData)
server.post("/drinks/fav" , CreateFavData)
server.delete("/drinks/fav", DeleteFavData)
server.put("/drinks/fav", updateFavData)


//12- Check if the server is working.
server.listen(PORT, () => {
  console.log(`server is working on ${PORT}`)
})
