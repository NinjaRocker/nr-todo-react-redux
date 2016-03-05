// This is merely a sample data
let sampleOrderList = {
  name: 'Chris',
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

// now we define the actions
export const updateOrderList = {
  type: 'ADD_TODO'
};

export const setFilterAction = (id) => {
  return {
    type: 'SET_FILTER',
    id
  };
};