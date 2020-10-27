import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/Redux';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
