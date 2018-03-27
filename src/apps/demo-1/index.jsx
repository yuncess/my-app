import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.less';

export default class Demo1 extends Component {
  state = {
    index_1: null,
    index_2: null,
    index_3: null,
  }
  render() {
    const options = [{
      value: 'zhejiang',
      label: '浙江',
      children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
          value: 'xihu',
          label: '西湖',
        }],
      }],
    }, {
      value: 'jiangsu',
      label: '江苏',
      children: [{
        value: 'nanjing',
        label: '南京',
        children: [{
          value: 'zhonghuamen',
          label: '中华门',
        }],
      }],
    }];
    const { index_1, index_2, index_3 } = this.state;
    return (<div className="cascader-picker" id="cascaderPicker">
      {(index_1 == 0 || index_1) && (options[index_1].value + '/')}
      {(index_2 == 0 || index_2) && (options[index_1].children[index_2].value + '/')}
      {(index_3 == 0 || index_3) && (options[index_1].children[index_2].children[index_3].value)}
      <DropMenus menuList={options} onItemClick={(index_1) => { this.setState({ index_1: index_1, index_2: null, index_3: null }) }} />
      {(index_1 == 0 || index_1) && <DropMenus menuList={options[index_1].children} onItemClick={(index_2) => { this.setState({ index_2: index_2, index_3: null }) }} left='200px' />}
      {(index_2 == 0 || index_2) && <DropMenus menuList={options[index_1].children[index_2].children} onItemClick={(index_3) => { this.setState({ index_3: index_3 }) }} left='400px' />}
    </div >)
  }
}

const DropMenus = ({ menuList, onItemClick, left }) => {
  return (<ul className='drop-menus' style={{ left: left }}>
    {menuList.map((item, index) => <DropMenusLi onClick={() => {
      onItemClick(index);
    }} key={index}>
      {item.label}
    </DropMenusLi>)}
  </ul>)
}

class DropMenusLi extends Component {
  render() {
    const { onClick } = this.props;
    return (<li onClick={() => { onClick(); }} >
      {this.props.children}
    </li>)
  }
}