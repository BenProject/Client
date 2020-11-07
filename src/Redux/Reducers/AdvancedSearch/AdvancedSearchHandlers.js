import { fromJS } from 'immutable';

export default {
  updateParam: (state, action) => {
    return state.updateIn(['params', action.paramName], () => action.newValue);
  },
  resetParams: (state) => {
    return state.update('params', () => {
      return fromJS({});
    });
  },
};
