const mongoose = require('mongoose')
const { Schema } = mongoose;

// 객체의 키 값의 네이밍은 mongoose docs의 example을 따르겠다.

const userSchema = mongoose.Schema({
  email: {
    type: String, // 타입
    maxLength: 50, //최대길이
    required: true, //필수
    unique: true, //고유한 값
    trim: true
    , // 공백제거
  },
  password: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    min: [1, "must Be higher than 1"], //최소 숫자
    max: 150, //최대숫자
  },
  image: String,
  auth: {
    type: Number,
    default: 0, //
  },
});

const User = mongoose.model("users", userSchema);

module.exports = { User };
