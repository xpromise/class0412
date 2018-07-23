//引入mongoose
const mongoose = require('mongoose');
//创建schema
const Schema = mongoose.Schema;
//创建约束对象
const usersSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})
//创建集合对象
const Users = mongoose.model('Users', usersSchema);
//暴露出去
module.exports = Users;