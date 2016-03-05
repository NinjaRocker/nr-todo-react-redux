import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute } from 'react-router';
import todoApp from './reducers';
import App from './components/App';
// Amile's try
import IndexPage from './amile/components/Index';
import UserCenter from './amile/components/UserCenter';

import Update from './amile/components/uc/update/Update';
import Order from './amile/components/uc/order/Order';
import About from './amile/components/uc/about/About';
import OrderList from './amile/components/uc/order/OrderList';
import VisibleOrderList from './amile/containers/VisibleOrderList';

let sampleOrderList = {
  name: 'Chris',
  filter: '3',
  orders: [{
    id: 'ORDER_0001',
    name: 'Peter',
    tel: '17600801640',
    status: '1' // 未支付
  }, {
    id: 'ORDER_0002',
    name: 'John',
    tel: '13212345678',
    status: '2' // 未确认
  }, {
    id: 'ORDER_0003',
    name: 'Vivian',
    tel: '13322334455',
    status: '3' // 已完成
  }]
};

let store = createStore((state = sampleOrderList) => {
  return state;
});

//render(
//  <Provider store={store}>
//    <App />
//  </Provider>,
//  document.getElementById('app')
//);
console.log('[STORE]', store.getState());
render(
  <Provider store={store}>
    <Router>
      <Route path="/">
        <IndexRoute component={IndexPage} />
        <Route path="/uc">
          <IndexRoute component={UserCenter} />
          <Route path="update" component={Update}/>
          <Route path="order" component={Order}>
            <Route path="unpayed" component={VisibleOrderList}/>
            <Route path="unconfirmed" component={VisibleOrderList}/>
            <Route path="completed" component={VisibleOrderList}/>
          </Route>
          <Route path="about" component={About} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('route')
);