import {LOADING, FETCHDATA, ERROR} from './action-types';
import axios from 'axios';

export const loading = () => ({type: LOADING});

export const updateData = (data) => ({type: FETCHDATA, data});

export const error = () => ({type: ERROR});

export const fetchData = data => {
  return dispatch => {
    //将状态更新为loading
    dispatch(loading());
    //请求数据
    axios.get(`https://api.github.com/search/users?q=${data}`)
      .then(res => {
        //修改为请求成功的状态
        dispatch(updateData(res.data.items))
      })
      .catch(err => {
        //修改为请求失败的状态
        dispatch(error());
      })
  }
}