var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET index page. */
router.get('/', ctrlMain.index);

module.exports = router;
