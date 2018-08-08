/*
  actions: 根据用户操作传入data，生成action {type: xxx, data: xxx}
 */
import {INCREMENT, DECREMENT} from './action-types';

export const increment = data => ({type: INCREMENT, data});

export const decrement = data => ({type: DECREMENT, data});

//异步方法
export const incrementAsync = data => {
  return dispatch => {
    //发送ajax请求、设置定期器
    setTimeout(() => {
      dispatch(increment(data));
    }, 1000)
  }
}