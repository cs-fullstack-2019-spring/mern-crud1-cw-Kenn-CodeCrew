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

router.get('/edit/:id', (req, res)=>{
  ProductCollection.findOne({productID:req.params.id},
      (errors, results)=>{
        if(errors) res.send(errors);
        else res.send(results);
      });
});

router.put('/update', (req, res)=>{
  ProductCollection.updateOne(
      {productID: req.body.productID}, req.body,
      (errors, results)=>{
        if(errors) res.send(errors);
        else res.send(results);
      });
});

module.exports = router;
