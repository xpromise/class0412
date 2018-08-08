import {connect} from 'react-redux';

import List from '../components/List/list';

export default connect(
  state => ({
    firstView: state.ajaxReducer.firstView,
    loading: state.ajaxReducer.loading,
    resData: state.ajaxReducer.resData,
    errData: state.ajaxReducer.errData,
  }),
  null
)(List);