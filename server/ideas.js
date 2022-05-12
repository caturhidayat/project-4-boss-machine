const ideasRouter = require("express").Router();
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");

module.exports = ideasRouter;

// Param
ideasRouter.param("id", (req, res, next, id) => {
  const ideaid = getFromDatabaseById('ideas', id)
  if (ideaid) {
    res.ideas = ideaid;
    next()
  } else {
    res.status(404).send();
  }
});
// MINION ROUTE
// Get All Minions
ideasRouter.get("/", (req, res, next) => {
  const allIdeas = getAllFromDatabase("ideas");
  res.send(allIdeas);
});
// Get Minion by id
ideasRouter.get("/:id", (req, res, next) => {
    res.send(res.ideas);
});
// Create Minion
ideasRouter.post("/", (req, res, next) => {
  const addIdeas = addToDatabase("ideas", req.body);
  res.status(201).send(addIdeas);
});
// Edit Minion
ideasRouter.put("/:id", (req, res, next) => {
  const ideaid = req.body;
  if (ideaid === NaN) {
    res.status(404).send();
  }
  const editIdeas = updateInstanceInDatabase("ideas", ideaid);
  res.send(editIdeas);
});
// Delete Minion 
ideasRouter.delete("/:id", (req, res, next) => {
  const deleteIdeas = deleteFromDatabasebyId("ideas", req.params.id);
  if(deleteIdeas) {
    res.status(204)
  } else {
    res.status(500)
  }
  res.send()
});