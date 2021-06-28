var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let counter = 1;
router.get('/hitcount',function(req,res,next){
    counter ++;
    res.send(string(counter));
});

router.get('/last.txt', function(req,res){
   res.send(string);
   string = Date();
});

    var color;
router.get('/color.html', function(req,res){

    if(counter == 1){
        color= 'red';
    }
    else if (counter ==2){
        color = 'yellow';
    }
    else if (counter == 3){
        color = 'green';
    }
    else if (counter == 4){
        color = 'blue';
        counter =0;
    }

    counter++;
    res.send('<!DOCTYPE html> \
        <html> \
          <head> \
            <title>Title</title> \
            <style></style> \
          </head> \
          <body><h1 style ="color:'+color+'">'+color+'</h1><body>\
        </html>');

});

module.exports = router;
