//引入依赖
import React, {Component} from 'react';
//引入logo图片
import logo from './logo.svg';
//引入css
import './app.css';

//定义组件
class App extends Component {
  
  render () {
    return (
      <div>
        <h1>hello react</h1>
        <img className="image" src={logo} alt="logo"/>
      </div>
    )
  }
  
}

//暴露出去
export default App;