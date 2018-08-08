import React, {Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  static propTypes = {
    firstView: PropTypes.string.isRequired,
    loading: PropTypes.string.isRequired,
    resData: PropTypes.string.isRequired,
    errData: PropTypes.string.isRequired
  }
  
  render () {
    //获取状态
    const {firstView, loading, resData, errData} = this.props;
    
    if (firstView) {
      return <h1>enter name to search</h1>;
    } else if (loading) {
      return <h1>loading...</h1>;
    } else if (resData) {
      return (
        <div className="row">
          {
            resData.map((item, index) =>
              <div className="card" key={index}>
                <a href={item.html_url}>
                  <img src={item.avatar_url} style={{width: '100px'}} alt="图片"/>
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            )
          }
        </div>
      )
    } else {
      return <h1>{errData}</h1>;
    }
  }
}

// List.propTypes = {
//   searchName: PropTypes.string.isRequired
// }

export default List;