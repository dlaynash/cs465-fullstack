var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/news');

/* GET news page. */
router.get('/', ctrlMain.news);

module.exports = router;