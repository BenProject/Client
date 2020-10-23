export default {
  toggleTheme: (state, action) => {
    return state.update('isDarkTheme', (isDarkTheme) => !isDarkTheme);
  },
};
