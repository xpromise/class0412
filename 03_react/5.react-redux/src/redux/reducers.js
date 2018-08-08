/**
 * reducers：计算得出新的状态
 * @param preState  先前的状态
 * @param action    actions函数传过来的对象{type: xxx, data: xxx}
 */
function reducer(preState = 0, action) {
  //设置初始化状态为 0
  console.log(preState, action);
  //纯函数   状态机函数
  switch (action.type) {
    case 'increment' :
      return preState + action.data;  //将先前的状态 + 要更新的状态 = 新的状态
    case 'decrement' :
      return preState - action.data;  //将先前的状态 - 要更新的状态 = 新的状态
    default :
      //传入是非法数据 -- type
      return preState;
  }
}

export default reducer;