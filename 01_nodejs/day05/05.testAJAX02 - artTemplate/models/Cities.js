//引入mongoose
const mongoose = require('mongoose');
//创建schema
const Schema = mongoose.Schema;
//创建约束对象
const citiesSchema = new Schema({
  code: String,
  province: String,
  city: String,
  county: String,
  name: String,
  level: Number
})
//创建集合对象
const Cities = mongoose.model('Cities', citiesSchema);
//暴露出去
module.exports = Cities;