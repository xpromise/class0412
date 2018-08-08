import React, {Component} from 'react';
import PropTypes from 'prop-types';
import pubsub from 'pubsub-js';

class CommentItem extends Component {
  constructor (props) {
    super(props);
    this.delComment = this.delComment.bind(this);
  }
  
  delComment () {
    // 获取当前下标
    const {index} = this.props;
    
    if (window.confirm(`您确认删除${this.props.username}吗？`)) {
      //调用App组件删除数据的方法
      // this.props.delComment(index);
      //发布消息
      pubsub.publish('INDEX', index);
    }
  }
  
  render () {
    //获取数据
    const {username, comment} = this.props;
    return (
      <li className="list-group-item">
        <div className="handle">
          <a onClick={this.delComment}>删除</a>
        </div>
        <p className="user"><span >{username}</span><span>说:</span></p>
        <p className="centence">{comment}</p>
      </li>
    )
  }
}

CommentItem.propTypes = {
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default CommentItem;