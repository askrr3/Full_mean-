var mongoose = require('mongoose')
var Product = mongoose.model('product')

function ProductController(){
  this.addproduct = function(req, res){
    var newproduct = new Product({name: req.body.name, imageurl: req.body.imageurl, description: req.body.description, quantity: req.body.quantity})
    console.log('inside the addproduct method');
    console.log(newproduct);
    newproduct.save(function(err){
      if(err){
        res.json(err)
      } else{
        res.json(newproduct)
      }
    })
  }
}

module.exports = new ProductController()
