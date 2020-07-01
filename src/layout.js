import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './layout.less';
import './reset.less';

export default class LayOut extends Component {
  render() {
    return (
      <div>
        <div className='menu-bar'>
          <Link to='/demo-1' className='cur'>
            级联选择
          </Link>
          <Link to='/demo-login' className='cur'>
            登录
          </Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
