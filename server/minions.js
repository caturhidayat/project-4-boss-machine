const minionsRouter = require("express").Router();
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteAllFromDatabase,
} = require("./db");

module.exports = minionsRouter;

// Param
minionsRouter.param("minionid", (req, res, next, id) => {
  const minionid = getFromDatabaseById('minions', id)
  if (minionid) {
    res.minions = minionid;
    next()
  } else {
    res.status(404).send();
  }
});
// MINION ROUTE
// Get All Minions
minionsRouter.get("/", (req, res, next) => {
  const allMinions = getAllFromDatabase("minions");
  res.send(allMinions);
});
// Get Minion by id
minionsRouter.get("/:minionid", (req, res, next) => {
    res.send(res.minions);
});
// Create Minion
minionsRouter.post("/", (req, res, next) => {
  const addMinions = addToDatabase("minions", req.body);
  res.status(201).send(addMinions);
});
// Edit Minion
minionsRouter.put("/:minionid", (req, res, next) => {
  const minionid = req.body;
  if (minionid === NaN) {
    res.status(404).send();
  }
  const editMinions = updateInstanceInDatabase("minions", minionid);
  res.send(editMinions);
});
// Delete Minion
minionsRouter.delete("/:minionid", (req, res, next) => {
  const minionid = req.params.minionid;
  const deleteMinions = deleteFromDatabasebyId("minions", minionid);
  res.send(deleteMinions);
});
