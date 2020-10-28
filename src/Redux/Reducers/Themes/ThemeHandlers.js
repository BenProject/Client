export default {
  toggleTheme: (state) => {
    return state.update('isDarkTheme', (isDarkTheme) => !isDarkTheme);
  },
};
