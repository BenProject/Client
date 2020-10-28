export default {
  updateParam: (state, action) => {
    return state.updateIn(['params', action.paramName], action.newValue);
  },
};
