import {connect} from 'react-redux';
import {setFilter} from '../reducers/';
import OrderList from '../components/uc/order/OrderList';


//todos.filter(t => t.completed);

const mapStateToProps = (state) => {
  console.log('[VOL]', state.orders);
  console.log('[VOL]', state.orders.filter(order => order.status === '1'));
  return {
    list: state.orders.filter(order => order.status === state.filter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callback: () => {
      dispatch(setFilter(id));
    }
  };
};

const VisibleOrderList = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderList);

export default VisibleOrderList;