const router = require('express').Router();

/* Services router */
const servicesRouter = require('./services');
router.use('/', servicesRouter);

/* Party router */
const partyRouter = require('./party');
router.use('/', partyRouter);

module.exports = router;