const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones) => {
      console.log("Here is the list of drones", drones);
      res.render("drones/list.hbs", { drones });
    })
    .catch((err) => {
      console.log("An error occured while listing all the drones.");
    });
});

// get is only to show the form
router.get("/drones/create-form", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create-form", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then((drones) => {
      console.log("Here is the new drone you have created.", drones);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("An error has occured while creating a new drone.");
    });
});

router.get("/drones/:id/update-form", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findById(id)
    .then((drones) => {
      console.log("Here is your updated drone", drones);
      res.render("drones/update-form", { drones });
    })
    .catch((err) => {
      console.log("An error has occured while updating a drone.");
    });
});

router.post("/drones/:id/update-form", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then((drones) => {
      console.log("Here is the new drone you have updated.", drones);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("An error has occured while updating a new drone.");
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
