import React, {Component} from 'react';

class News extends Component {
  state = {
    data: []
  }
  
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        data: ['news01', 'news03', 'news05']
      })
    }, 1000)
  }
  
  render () {
    const {data} = this.state;
    return (
      <ul>
        {data.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    )
  }
}

export default News;