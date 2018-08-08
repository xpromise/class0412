/*
  actions: 根据用户操作传入data，生成action {type: xxx, data: xxx}
 */

export const increment = data => ({type: 'increment', data});

export const decrement = data => ({type: 'decrement', data});