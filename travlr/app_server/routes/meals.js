var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/meals');

/* GET meals page. */
router.get('/', ctrlMain.meals);

module.exports = router;