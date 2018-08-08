import {decrement, increment} from "../../redux/actions";
import {connect} from "react-redux";
//引入UI组件
import App from '../../components/app/App';
//暴露容器组件
export default connect(
  state => ({count: state}),
  {increment, decrement}
)(App);

