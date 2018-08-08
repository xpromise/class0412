import {createStore} from 'redux';

//引入reducer
import reducer from './reducers';

//创建store对象
const store = createStore(reducer);   //需要传入reducer

//暴露出去
export default store;