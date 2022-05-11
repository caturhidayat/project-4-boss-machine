const express = require('express');
const apiRouter = express.Router();
const db = require('./db')


module.exports = apiRouter;
// MINION ROUTE
// Get All Minions
apiRouter.get('/minions', (req, res, next) => {
    const allMinions = db.getAllFromDatabase('minions')
    res.send(allMinions)
})
// Get Minion by id
apiRouter.get('/minions/:minionid', (req, res, next) => {
    const minionid = req.params.minionid
    if(minionid === NaN || !minionid) {
        res.status(404).send()
    } else {
        const minions = db.getFromDatabaseById('minions', minionid)
        res.send(minions)
    }
})
// Create Minion
apiRouter.post('/minions', (req, res, next) => {
    const addMinions = db.addToDatabase('minions', req.body)
    res.send(addMinions)
})
// Edit Minion
apiRouter.put('/minions/:minionid', (req, res, next) => {
    const minionid = req.body
    if(minionid === NaN) {
        res.status(404).send()
    }
    const editMinions = db.updateInstanceInDatabase('minions', minionid)
    res.send(editMinions)
})
// Delete Minion
apiRouter.delete('/minions/:minionid', (req, res, next) => {
    const minionid = req.params.minionid
    const deleteMinions = db.deleteFromDatabasebyId('minions', minionid)
    res.send(deleteMinions)
})
