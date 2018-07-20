//引入mongoose
const mongoose = require('mongoose');

const promise = new Promise((resolve, reject) => {
  //连接数据库
  mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true});
  //绑定事件监听，监听连接数据库是否成功
  mongoose.connection.once('open', err => {
    if (!err) {
      console.log('数据库连接成功~~');
      resolve();  //将pending改为成功的状态
    }
    else {
      console.log(err);
      reject(err);  //将pending改为失败的状态
    }
  })
})

promise
  .then(() => {  //成功的回调
    //说明数据库连接成功了~~~
    //创建schema对象
    const Schema = mongoose.Schema;
    //用来创建约束对象
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
    //创建集合对象
    /*
      mongoose.model('集合名称', 约束对象)
        集合名称：首字母大写，是复数形式
     */
    const Students = mongoose.model('Students', studentsSchema);
    
    /*
      集合对象的方法：
        CRUD
          - create
            Model.create(文档对象, [回调函数])
          - read
            Model.find(查询条件[, 投影], [回调函数])
              回调函数中返回的data的数据类型是 数组
            Model.findOne(查询条件[, 投影], [回调函数])
              回调函数中返回的data的数据类型是 对象
          - update
            Model.update(查询条件, 更新内容[, 配置对象], [回调函数])
          - delete
            Model.remove(查询条件, [回调函数])
         以上所有方法的返回值都是promise对象
     */
  
    Students.remove({age: {$lt: 19}}, err => {
      if (!err) console.log('数据删除成功');
      else console.log(err);
    })
    
    /*Students.update({$or: [{age: {$gte: 19}}, {sex: '男'}]}, {$inc: {age: 1}}, {multi: true}, err => {
      if (!err) console.log('数据更新成功');
      else console.log(err);
    })*/
    
    /*Students.findOne({name: {$in: ['王诗琦']}}, {__v: 0, _id: 0}, (err, data) => {
      if (!err) {
        console.log(data);
      } else {
        console.log(err);
      }
    })*/
    
    /*Students.find({name: {$in: ['王xx']}}, (err, data) => {
      if (!err) {
        console.log(data);
      } else {
        console.log(err);
      }
    })*/
    
    /*Students.create({
      name: '周雨',
      age: 18,
      sex: '男',
      phone: '17777777777',
      hobby: ['鸡腿', '烤肉拌饭'],
      info: '高富帅'
    }, err => {
      if (!err) console.log('文档插入成功');
      else console.log(err);
    })*/
    
   
  })
  .catch(err => console.log(err))    //失败的回调
  


