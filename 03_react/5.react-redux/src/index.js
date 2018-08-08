import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/App';
import store from './redux/store';

ReactDOM.render(<App store={store}/>, document.getElementById('app'));

//一旦srore状态发生变化，就会调用其回调函数
//重新渲染组件
store.subscribe(() => {
  ReactDOM.render(<App store={store}/>, document.getElementById('app'));
})