const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/ajax', (req, res) => {
  // console.log(req.query);
  res.send('12306');
})

app.listen(3000, () => console.log('服务器启动成功了'));