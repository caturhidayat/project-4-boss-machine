const express = require('express');
const apiRouter = express.Router();
const ideasRouter = require('./ideas');
const meetingsRouter = require('./meetings');
const minionRouter = require('./minions');


apiRouter.use('/minions', minionRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter)

module.exports = apiRouter;

