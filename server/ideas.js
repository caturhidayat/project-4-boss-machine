const ideasRouter = require("express").Router();
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteAllFromDatabase,
} = require("./db");

module.exports = ideasRouter;