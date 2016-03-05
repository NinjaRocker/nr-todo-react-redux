export const setFilter = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return Object.assign({}, state, {
        filter: action.id
      });
    default:
      return state
  }
};
