var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductSchema = new mongoose.Schema({

  name:{
    type: String,
    required: true,
    maxlength: [20, 'can not be longer than 200 characters']
  },
  imageurl:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true,
    maxlength: [200, 'can not be longer than 200 characters']
  },
  quantity: {
    type: Number,
    required: true
  }
})

var product = mongoose.model('product', ProductSchema)
