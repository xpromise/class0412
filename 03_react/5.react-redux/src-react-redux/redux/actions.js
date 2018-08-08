/*
  actions: 根据用户操作传入data，生成action {type: xxx, data: xxx}
 */
import {INCREMENT, DECREMENT} from './action-types';

export const increment = data => ({type: INCREMENT, data});

export const decrement = data => ({type: DECREMENT, data});