# redux
* store
  * 对象
  * 集中管理react组件所有状态
  * 存储、更新...  更新完后重新渲染组件
* actions
  * 函数
  * 通知reducer，做什么事
  * {type: '工作的类型', data: '要更新的数据'}
* reducers  
  * 函数
  * 根据action和preState，来计算得出新的状态
  * 不直接更新状态，只负责计算得出新的状态，交给store去更新