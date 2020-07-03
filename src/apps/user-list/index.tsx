import React, { Component } from 'react';
import { Api } from 'utils';

export default class UserList extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }
  async componentDidMount() {
    const { res, err } = await Api.get('/quary');
    if (!!err) {
      alert(err.message);
    } else {
      alert('查询成功');
      this.setState({ userList: res });
    }
  }
  render() {
    const { userList } = this.state;
    console.log('userList:', userList);
    return (
      <div>
        {userList.map((user) => (
          <p>
            <span>{user.name}</span>
            {`  `}
            <span>{user.psd}</span>
          </p>
        ))}
      </div>
    );
  }
}
