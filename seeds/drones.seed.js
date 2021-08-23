// if we want to use mongoose, we need to require it on the top
const mongoose = require("mongoose");

// import our drone model
const Drone = require("../models/Drone.model");

// connecting to the database
require("../db");

// creating the array of objects with data of the drone model
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

// create method needs a promise
Drone.create(drones)
  .then((createdDrones) => {
    console.log(`${drones.length} drones have been created.`);

    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("An error has occured while creating drones");
  });
