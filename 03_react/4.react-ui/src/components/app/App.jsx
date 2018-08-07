import React, {Component} from 'react';
import {
  Button,
  Row,
  Col,
  Carousel,
  DatePicker
} from 'antd';

const { RangePicker } = DatePicker;


// import Bread from '../bread/Bread';

import './app.css';

class App extends Component {
  render () {
    const dateFormat = 'YYYY/MM/DD';
    return (
      <div>
        <Row>
          <Col className="bg" span={12}>col-12</Col>
          <Col className="bg" span={12}>col-12</Col>
        </Row>
        <Row>
          <Col className="bg" span={6}>col-8</Col>
          <Col className="bg" span={8}>col-8</Col>
          <Col className="bg" span={8}>col-8</Col>
        </Row>
        <Row>
          <Col className="bg" span={6}>col-6</Col>
          <Col className="bg" span={6}>col-6</Col>
          <Col className="bg" span={6}>col-6</Col>
          <Col className="bg" span={6}>col-6</Col>
        </Row>
        <Button type="primary">按钮</Button>
        <Button type="dashed">按钮</Button>
        <Button type="primary" shape="circle" icon="download" size="large" />
        <Button type="primary" icon="download" size="large">Download</Button>
        {/*<Bread />*/}
        <Carousel autoplay >
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>,
        
        <RangePicker
          defaultValue={[moment('2018/08/06', dateFormat), moment('2018/08/07', dateFormat)]}
          format={dateFormat}
        />
        
      </div>
    )
  }
}

export default App;