const express = require('express');
const db = require('./database/db');
const Cities = require('./models/Cities');
const app = express();
app.use(express.static('public'));

db
  .then(() => {
    function getData(err, data, res) {
      if (!err && data.length) {
        //方法没有出错并且找到了相应数据
        res.send({status: 'ok', data})
      } else {
        //方法出错了或者数据没找到了
        res.send({status: 'error'})
      }
    }

    //查询所有省份信息
    app.get('/province', (req, res) => {
      Cities.find({level: 1}, {_id: 0, code: 0, city: 0, county: 0, level: 0}, (err, data) => getData(err, data, res));
    })

    //查询指定省份的所有市信息
    app.get('/city', (req, res) => {
      //获取用户指定的省份
      const {province} = req.query;
      if (!province) {
        res.send({status: 'error'});
        return ;
      }
      //去数据库中查找
      Cities.find({province, level: 2}, {_id: 0, code: 0, province: 0, county: 0, level: 0}, (err, data) => getData(err, data, res))
    })

    //查询指定省份的指定市所有区/县信息
    app.get('/county', (req, res) => {
      //获取用户指定的省份
      const {province, city} = req.query;
      if (!province || !city) {
        res.send({status: 'error'});
        return ;
      }
      //去数据库中查找
      Cities.find({province, city, level: 3}, {_id: 0, code: 0, city: 0, province: 0, level: 0}, (err, data) => getData(err, data, res))
    })
  })
  .catch(err => console.log(err))

app.listen(3000, () =>  console.log('服务器启动成功了~'))