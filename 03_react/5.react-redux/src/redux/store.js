import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//引入reducer
import reducer from './reducers';

//创建store对象
const store = createStore(reducer, applyMiddleware(thunk));   //需要传入reducer

//暴露出去
export default store;