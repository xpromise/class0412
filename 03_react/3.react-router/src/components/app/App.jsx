import React, {Component} from 'react';
import {
  Route,
  NavLink,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
/*
  NavLink组件和Link组件的区别：
    选中时有没有加上active类
 */

import About from '../../views/about/About';
import Home from '../../views/home/Home';

import './app.css';

class App extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" activeClassName="myActive" to="/about">About</NavLink>
              <NavLink className="list-group-item" activeClassName="myActive" to="/home">Home</NavLink>
              {/*<a className="list-group-item myActive" href="/about" aria-current="page">About</a>*/}
              {/*<a className="list-group-item" href="/home">Home</a>*/}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home}/>
                  <Redirect push to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;