import {connect} from 'react-redux';

import {delComment} from '../redux/actions';
import CommentItem from '../components/CommentItem/commentItem';

export default connect(
  null,  //不需要store中的数据
  {delComment}
)(CommentItem);