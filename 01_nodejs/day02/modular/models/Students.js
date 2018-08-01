/*
  此模块用来创建集合对象
 */
//引入mongoose
const mongoose = require('mongoose');
//创建schema对象
const Schema = mongoose.Schema;
//创建约束对象
const studentsSchema = new Schema({
  name: String,
  age: Number,
  sex: String,
  phone: {
    type: String,
    unique: true,  //唯一的
    required: true  //必须的
  },
  hobby: [String],  //hobby整个值应该是数组，数组中每一个数据是string
  info: Schema.Types.Mixed,   //混合数据类型，所有类型都接受
  meta: {
    createTime: {
      type: Date,
      default: Date.now()  //设置默认值
    },
    updateTime: {
      type: Date,
      default: Date.now()  //设置默认值
    }
  }
})
//预设函数
studentsSchema.pre('save', function (next) {
  if (!this.isNew) {
    this.meta.updateTime = Date.now();
  }
  next();
})
//创建集合对象
const Students = mongoose.model('Students', studentsSchema);
//暴露出去
module.exports = Students;
