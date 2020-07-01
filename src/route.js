import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import LayOut from './layout';
import Demo1 from './apps/demo-1';
import DemoLogin from './apps/demo-login';

const routes = [
  {
    path: '/demo-1',
    exact: true,
    component: () => <Demo1 />,
  },
  {
    path: '/demo-login',
    exact: true,
    component: () => <DemoLogin />,
  },
];

export default class RouterCp extends Component {
  render() {
    return (
      <HashRouter>
        <LayOut>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </LayOut>
      </HashRouter>
    );
  }
}
