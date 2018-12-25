var express = require('express');
var router = express.Router();

/* GET contacts page. */
router.get('/', function(req, res, next) {
  res.render('contacts', { title: 'contacts'});
});

module.exports = router;