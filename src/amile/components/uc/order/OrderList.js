import React from 'react';

const OrderItem = ({order}, index) => (
  <div
    style={{
      border: '1px dashed black',
      marginBottom: '20px'
    }}
    key={index}
  >
    <div>Name: {order.name}</div>
    <div>Phone: {order.tel}</div>
    <div>Status: {
      order.status === '1' ?
        '未支付' : order.status === '2' ?
        '未确认' : order.status === '3' ?
        '已完成' :
        '未知状态'
    }</div>
  </div>
);

const OrderList = (props) => {
  let orderList = [{
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
  }];
  console.log('[OrderList][props.list]', props.list);
  return (
    <div>
      {props.list.map((item)=>(
        <OrderItem
          order={item}
        />
      ))}
    </div>
  );
};

export default OrderList;