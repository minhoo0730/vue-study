const mongoose = require('mongoose');
const menuSchema = mongoose.Schema(
  {
    // menuId:{
    //   type:Number,
    //   default:0,
    // },
    name:{
      type:String,
      required : [true, "Please enter a Menu name"]
    },
    description:{
      type: String,
      required: [true, "Please enter a Menu description"]
    },
    categore:{
      type: String,
      required: [true, "Please enter a Menu categore"]
    },
    // quantity:{
    //   type:Number,
    //   required:false,
    //   default:0
    // },
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
const menus = mongoose.model('menus', menuSchema);
module.exports = menus;
