var express = require('express');
var router = express.Router();
var ProductCollection = require("../models/ProductSchema");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/list", (req,res)=>{
  ProductCollection.find((errors, results)=>{
    if(errors) res.send(errors);
    else res.send(results);
  });
});


router.post('/add', (req, res)=>{
  ProductCollection.create(req.body, (errors, results)=>{
    if(errors) res.send(errors);
    else res.send("ADDED!!!");
  });
});

router.delete('/delete', (req, res)=>{
  ProductCollection.deleteOne(req.body, (errors, results)=>{
    if(errors) res.send(errors);
    else res.send("DELETED!!!");
  });
});

module.exports = router;
