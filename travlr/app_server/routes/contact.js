var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/contact');

/* GET contact page. */
router.get('/', ctrlMain.contact);

module.exports = router;