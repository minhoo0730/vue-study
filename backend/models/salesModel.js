const mongoose = require('mongoose');
const saleSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required : [true, "Please enter a product name"]
    },
    quantity:{
      type:Number,
      required:true,
      default:0
    },
    price:{
      type:Number,
      required:true,
    },
    image:{
      type:String,
      required:false,
    },
  },
  {
    timestamps:true
  }
)

const Sales = mongoose.model('Sales', saleSchema);
module.exports = Sales;
