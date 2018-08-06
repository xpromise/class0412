# 评论管理功能
## 1、拆分组件
* App 应用主组件
* AddComment 添加评论组件
* CommentList 显示评论内容组件
* CommentItem 单个评论组件
## 2、数据源
* App 应用主组件
## 3、实现静态组件
* 将没有结束符的标签加上结束符 input
* 将class 改为 className
* 将style 改为 {{}}
## 4、实现动态组件
* AddComment
  * 绑定事件
    * form表单 禁止默认事件
    * button 绑定点击事件
  * App组件中定义状态和修改状态的方法，方法通过标签属性的方式传递给子组件，最终由子组件调用
* CommentList
  * 通过props获取数据，遍历进行展示