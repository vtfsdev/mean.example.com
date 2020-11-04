var express = require('express');
var router = express.Router();
var Articles = require('../../models/articles');

router.get('/', function(req, res, next) {
    Articles.find({},function(err, articles){
      if(err){
       return res.json({'success':false, 'error': err});
     }
      return res.json({'success':true, 'articles': articles});
    });
});




router.get('/:articleId', function(req,res){});

router.post('/', function(req, res) {});

router.put('/', function(req, res){});

router.delete('/:articleId', function(req,res){});

module.exports = router;