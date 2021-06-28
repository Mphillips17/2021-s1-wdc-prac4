var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let counter = 0;
router.get('/hitcount',function(req,res,next){
    counter ++;
    res.send(string(counter));
});

router.get('last.txt', function(req,res){
   res.send(string);
   string = Date();
});

module.exports = router;
