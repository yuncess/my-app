import React, { Component } from 'react';
import { Api } from 'utils';

export default class UserDelete extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  render() {
    const { name } = this.state;
    return (
      <div>
        <input
          placeholder='用户名'
          value={name}
          onChange={(e) => {
            this.setState({ name: e.target.value.trim() });
          }}
        />
        <button onClick={this.onClick}>delete</button>
      </div>
    );
  }
  onClick = async () => {
    const { name } = this.state;
    const { res, err } = await Api.get(`/delete/${name}`);
    if (!!err) {
      alert(err.message);
    } else {
      alert('删除成功');
    }
  };
}
