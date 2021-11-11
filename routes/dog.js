var express = require('express');
const dog_controllers= require('../controllers/dog'); 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dog', { title: 'Search Results dog' });
});

module.exports = router;