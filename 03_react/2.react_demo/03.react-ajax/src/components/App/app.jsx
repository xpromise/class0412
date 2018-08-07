import React, {Component} from 'react';

import Search from '../Search/search';
import List from '../List/list';

class App extends Component {
  state = {
    searchName: ''
  }
  /*constructor (props) {
    super(props);
    //初始化状态
    this.state = {
      searchName: ''
    }
    //修改this指向
    // this.search = this.search.bind(this);
  }*/
  
  search = (searchName) => {
    // console.log(searchName);
    //更新状态
    this.setState({searchName});
  }
  
  render () {
    //获取状态
    const {searchName} = this.state;
    // console.log(searchName);
    return (
      <div className="container">
        <Search search={this.search}/>
        <List searchName={searchName}/>
      </div>
    )
  }
}

export default App;