import {connect} from 'react-redux';

import Search from '../components/Search/search';
import {fetchData} from '../redux/actions';

export default connect(
  null,
  {fetchData}
)(Search);