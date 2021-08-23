// Iteration #1
const { Schema, model } = require("mongoose");

const dronesSchema = new Schema(
  {
    name: { type: String },
    propellers: { type: Number },
    maxSpeed: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Drone", dronesSchema);
