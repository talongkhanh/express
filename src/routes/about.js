const express = require('express');

const router = express.Router();

const aboutController = require('../app/controllers/AboutController');

router.use('/:slug', aboutController.show);
router.use('/', aboutController.index);

module.exports = router;