import {combineReducers} from 'redux';

import {LOADING, FETCHDATA, ERROR} from './action-types';
/*
  firstView 初始化渲染
  loading   请求数据中
  resData   请求成功了数据
  errData   请求失败错误
 */
const init = {
  firstView: true,
  loading: false,
  resData: null,
  errData: null
}

function ajaxReducer(preState = init, action) {
  switch (action.type) {
    case LOADING :
      return {
        firstView: false,
        loading: true
      }
    case FETCHDATA :
      return {
        loading: false,
        resData: action.data
      }
    case ERROR :
      return {
        loading: false,
        errData: '网络太忙，请稍后再试~'
      }
    default :
      return preState;
  }
}

function commentReducer(preState = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT' :
      return [action.data, ...preState];
    case 'DEL_COMMENT' :
      return preState.filter((item, index) => index !== action.data);
    case 'INIT_COMMENTS' :
      return action.data;
    default :
      return preState;
  }
}

export default combineReducers({
  ajaxReducer,
  commentReducer
});

// {ajaxReducer, commentReducer}