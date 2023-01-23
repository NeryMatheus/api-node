const router = require('express').Router();
const partyController = require('../controllers/partyController');

/* POST */
router
    .route('/parties')
    .post((req, res) => partyController.create(req, res));

/* GETALL */
router
    .route('/parties')
    .get((req, res) => partyController.getAll(req, res));

/* GETBYID */
router
    .route('/parties/:id')
    .get((req, res) => partyController.getById(req, res));

/* DELETE */
router
    .route('/parties/:id')
    .delete((req, res) => partyController.delete(req, res));

/* UPDATE */
router
    .route('/parties/:id')
    .put((req, res) => partyController.update(req, res));

module.exports = router;