import React, { Component } from 'react';
import { host } from '@/config/host';
import { Api } from '@/utils';

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
  onClick = () => {
    const data = { name: '小南瓜', age: '1.5' };

    const { res, err } = Api.post('/add', data);

    // $.ajax({
    //   type: 'POST',
    //   url: `${host.apiHost}/add`,
    //   contentType: 'application/json;charset=utf-8',
    //   dataType: 'json',
    //   data: JSON.stringify(data),
    //   success: function (data, textStatus) {
    //     if (data.success) {
    //       console.log('保存成功！');
    //     } else {
    //       console.log('保存失败！');
    //     }
    //   },
    // });
  };
}
