import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import LayOut from './layout';
import Demo1 from './apps/demo-1';

const routes = [
  {
    path: '/demo-1',
    exact: true,
    component: () => <Demo1 />
  }
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
