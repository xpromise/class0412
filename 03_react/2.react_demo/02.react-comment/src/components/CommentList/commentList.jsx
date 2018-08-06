import React, {Component} from 'react';
import CommentItem from '../CommentItem/commentItem';

class CommentList extends Component {
  render () {
    //获取数据
    const {commentsList, delComment} = this.props;
    //判断是否有数据
    const display = commentsList.length ? 'none' : 'block';
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            commentsList.map((item, index) => <CommentItem key={index} {...item} delComment={delComment} index={index}/>)
          }
        </ul>
      </div>
    )
  }
}

export default CommentList;