import {connect} from 'react-redux';

import {addComment} from '../redux/actions';
import AddComment from '../components/AddComment/addComment';

export default connect(
  null,  //不需要store中的数据
  {addComment}
)(AddComment);