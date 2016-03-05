import React from 'react';
import WeuiNavbar from '../../ui/WeuiNavbar.js';

let navbarItems = [{
  id: 1,
  text: '未支付',
  route: '#/uc/order/unpayed',
  isOn: true,
  callback: () => {
    console.log('1111');
  }
}, {
  id: 2,
  text: '未确认',
  route: '#/uc/order/unconfirmed',
  isOn: false,
  callback: () => {
    console.log('2222');
  }
}, {
  id: 3,
  text: '已完成',
  route: '#/uc/order/completed',
  isOn: false,
  callback: () => {
    console.log('3333');
  }
}];

const Order = (props) => {
  return (
    <div className="weui_tab">
      <WeuiNavbar list={navbarItems} />
      <div className="weui_tab_bd">
        {props.children}
      </div>
    </div>
  );
};

export default Order;