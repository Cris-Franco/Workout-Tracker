// Bring in the model
const db = require("../models");

module.exports = function (app) {
  // Get workouts for workouts page
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
