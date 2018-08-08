import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/App';
import store from './redux/store';

function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('app'));
}

render();
//一旦store状态发生变化，就会调用其回调函数
//重新渲染组件
store.subscribe(render)