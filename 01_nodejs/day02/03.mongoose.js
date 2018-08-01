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

    //创建文档对象
    const stu = new Students({
      name: '王腾',
      age: 20,
      sex: '男',
      phone: '16666666666',
      hobby: ['吃吃吃', '睡睡睡', '喝喝喝'],
      info: '本人男爱好女'
    })
    //将文档对象保存在数据库中
    stu.save(err => {
      if (!err) console.log('文档插入成功');
      else console.log(err);
    })
  })
  .catch(err => console.log(err))    //失败的回调
  


