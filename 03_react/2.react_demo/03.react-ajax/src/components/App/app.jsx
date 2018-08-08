import React, {Component} from 'react';

import Search from '../../containers/search';
import List from '../../containers/list';

class App extends Component {
  
  render () {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    )
  }
}

export default App;