import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor (props) {
    super(props);
    this.search = this.search.bind(this);
  }
  
  search () {
    //获取输入框的值
    const value = this.msgInput.value.trim();
    if (value) {
      //调用方式更新状态
      this.props.search(value);
    }
  }
  
  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={input => this.msgInput = input}/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired
}


export default Search;