import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class List extends Component {
  constructor (props) {
    super(props);
    //初始化四种状态
    this.state = {
      firstView: true,    //页面的首次渲染
      loading: false,     //请求过程中状态
      resData: null,      //请求成功的数据
      errData: null       //请求失败的数据
    }
  }
  
  componentWillReceiveProps (props) {
    /*
      需要传入形参props，函数中才能使用props属性
     */
    //修改状态：将首次渲染的状态修改为loading状态
    this.setState({
      firstView: false,
      loading: true,
      resData: null,
      errData: null
    })
    // console.log(props);
    // console.log(this.props);  this.props并没有属性
    //发送ajax请求
    axios.get(`https://api.github.com/search/users?q=${props.searchName}`)
      .then(res => {
        //修改为请求成功的状态
        this.setState({
          loading: false,
          resData: res.data.items
        })
      })
      .catch(err => {
        //修改为请求失败的状态
        this.setState({
          loading: false,
          errData: '暂时没有相关的数据'
        })
      })
  }
  
  render () {
    //获取状态
    const {firstView, loading, resData, errData} = this.state;
    
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
                  <img src={item.avatar_url} style={{width: '100px'}}/>
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

List.propTypes = {
  searchName: PropTypes.string.isRequired
}

export default List;