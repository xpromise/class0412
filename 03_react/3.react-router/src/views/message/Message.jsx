import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

import MessageDetail from '../messageDetail/MessageDetail';

class Message extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }
  
  state = {
    data: []
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
          {id: 1, message: 'message001'},
          {id: 2, message: 'message002'},
          {id: 4, message: 'message004'}
        ]
      })
    }, 1000)
  }
  
  /*push = (id) => {
    // return () => this.props.history.push(`/home/message/${id}`);
    this.props.history.push(`/home/message/${id}`);
  }*/
  
  render() {
    const {history} = this.props;
    const {data} = this.state;
    return (
      <div>
        <ul>
          {
            data.map((item, index) =>
              <li key={index}>
                <a href={`/home/message/${item.id}`}>{item.message}</a> &nbsp;&nbsp;
                <button onClick={() => history.push(`/home/message/${item.id}`)}>push</button> &nbsp;
                {/*<button onClick={this.push.bind(null, item.id)}>push</button> &nbsp;*/}
                <button onClick={() => history.replace(`/home/message/${item.id}`)}>replace</button>
              </li>
            )
          }
        </ul>
        <button onClick={history.goForward}>前进</button>
        <button onClick={history.goBack}>后退</button>
        <Route path="/home/message/:id" component={MessageDetail}/>
      </div>
    )
  }
}

export default Message;