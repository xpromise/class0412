//引入依赖
import React, {Component} from 'react';
//引入组件
import AddComment from '../../containers/add';
import CommentList from '../../containers/list';

//定义组件
class App extends Component {
  
  render () {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <AddComment />
          <CommentList />
        </div>
      </div>
    )
  }
}

//默认暴露
export default App;