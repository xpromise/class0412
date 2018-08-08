import {connect} from 'react-redux';

import CommentList from '../components/CommentList/commentList';

export default connect(
  state => ({commentsList: state}),
  null  //不需要actions中的方法
)(CommentList);