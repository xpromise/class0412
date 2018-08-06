import React, {Component} from 'react';

class AddComment extends Component {
  constructor (props) {
    super(props);
    //修正this指向
    this.addComment = this.addComment.bind(this);
  }
  
  //添加评论的方法
  addComment () {
    //收集用户填写的数据
    const username = this.nameInput.value.trim();
    const comment = this.contentInput.value.trim();
    //过滤空的数据
    if (username && comment) {
      //添加评论数据
      this.props.updateComments({username, comment});
      //清空用户填写的数据
      this.nameInput.value = '';
      this.contentInput.value = '';
    }
  }
  
  render () {
    return (
      <div className="col-md-4">
        <form className="form-horizontal" onClick={event => event.preventDefault()}>
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref={input => this.nameInput = input}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref={input => this.contentInput = input}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddComment;