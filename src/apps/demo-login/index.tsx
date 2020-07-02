import React, { Component } from 'react';
import { host } from 'config/host';
import { Api } from 'utils';

export default class DemoLogin extends Component {
  render() {
    return (
      <div>
        <input placeholder='用户名' value={''} />
        <input placeholder='密码' value={''} />
        <button onClick={this.onClick}>login</button>
      </div>
    );
  }
  onClick = async () => {
    const data = { name: '小南瓜', age: '1.5' };
    const { res, err } = await Api.post('/add', data);
  };
}
