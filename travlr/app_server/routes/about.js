var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/about');

/* GET about page. */
router.get('/', ctrlMain.about);

module.exports = router;