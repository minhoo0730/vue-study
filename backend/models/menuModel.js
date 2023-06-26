const mongoose = require('mongoose');
const menuSchema = mongoose.Schema(
  {
    // menuId:{
    //   type:Number,
    //   default:0,
    // },
    name:{
      type:String,
      required : [true, "메뉴 이름을 입력하세요."]
    },
    description:{
      type: String,
      required: [true, "메뉴 설명을 입력하세요."]
    },
    categore:{
      type: String,
      required: [true, "카테고리를 입력하세요."]
    },
    // quantity:{
    //   type:Number,
    //   required:false,
    //   default:0
    // },
    price:{
      type:Number,
      required:[true, "가격을 입력하세요."],
    },
    inQuiry:{
      type:Number,
      default:1,
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
