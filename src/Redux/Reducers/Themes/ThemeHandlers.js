import { fromJS } from 'immutable';

export default {
  toggleTheme: (state, action) => {
    return state.update('isDarkTheme', (isDarkTheme) => !isDarkTheme);
  },
};
