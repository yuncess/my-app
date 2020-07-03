import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import CascadeSelection from './apps/cascade-selection';
import UserLogin from './apps/user-login';
import UserDelete from './apps/user-delete';

import './layout.less';
import './reset.less';

const routes = [
  {
    path: '/cascade-selection',
    exact: true,
    name: '级联选择',
    component: () => <CascadeSelection />,
  },
  {
    path: '/user-login',
    exact: true,
    name: '用户登录',
    component: () => <UserLogin />,
  },
  {
    path: '/user-delete',
    exact: true,
    name: '用户删除',
    component: () => <UserDelete />,
  },
];

export default class RouterCp extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      curIndex: 1,
    };
  }
  render() {
    const { curIndex } = this.state;
    return (
      <HashRouter>
        <div>
          <div className='menu-bar'>
            {routes.map((route, index) => (
              <a
                onClick={() => {
                  this.setState({ curIndex: index });
                }}
              >
                <Link
                  to={route.path}
                  className={curIndex === index ? 'cur' : ''}
                >
                  {route.name}
                </Link>
              </a>
            ))}
          </div>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </div>
      </HashRouter>
    );
  }
}
