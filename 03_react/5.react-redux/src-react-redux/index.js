import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Counter from './containers/counter/Counter';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>, document.getElementById('app'));

