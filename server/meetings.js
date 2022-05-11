const meetingsRouter = require("express").Router();
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteAllFromDatabase,
} = require("./db");

module.exports = meetingsRouter;