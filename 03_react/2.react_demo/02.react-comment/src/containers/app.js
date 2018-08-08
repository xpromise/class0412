import {connect} from 'react-redux';

import {initFetchData} from '../redux/actions';
import App from '../components/App/app';

export default connect(
  null,  //不需要store中的数据
  {initFetchData}
)(App);