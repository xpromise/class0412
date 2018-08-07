import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageDetail extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }
  
  render() {
    const {id} = this.props.match.params;
    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: message00{id}</li>
        <li>Content: message content00{id}</li>
      </ul>
    )
  }
}

export default MessageDetail;