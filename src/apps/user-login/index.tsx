import React, { Component } from 'react';
import { Api } from 'utils';

export default class UserLogin extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      psd: '',
    };
  }
  render() {
    const { name, psd } = this.state;
    return (
      <div>
        <input
          placeholder='用户名'
          value={name}
          onChange={(e) => {
            this.setState({ name: e.target.value.trim() });
          }}
        />
        <input
          placeholder='密码'
          value={psd}
          onChange={(e) => {
            this.setState({ psd: e.target.value.trim() });
          }}
        />
        <button onClick={this.onClick}>login</button>
      </div>
    );
  }
  onClick = async () => {
    const { name, psd } = this.state;
    const data = { name: name, psd: psd };
    const { res, err } = await Api.post('/login', data);
    if (!!err) {
      alert(err.message);
    } else {
      alert('登录成功');
    }
  };
}
