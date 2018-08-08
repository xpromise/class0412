//引入依赖
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//引入应用主组件
import App from './containers/app';
import store from './redux/store';

//渲染组件
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));