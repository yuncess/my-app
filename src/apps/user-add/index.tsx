import React, { Component } from 'react';
import { Api } from 'utils';

export default class UserAdd extends Component<any, any> {
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
      <div className='page'>
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
        <button onClick={this.onClick}>add</button>
      </div>
    );
  }
  onClick = async () => {
    const { name, psd } = this.state;
    const data = { name: name, psd: psd };
    const { res, err } = await Api.post('/add', data);
    if (!!err) {
      alert(err.message);
    } else {
      alert('新增成功');
    }
  };
}
