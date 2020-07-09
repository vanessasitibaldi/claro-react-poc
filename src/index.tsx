import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from "react-redux"
import store from './Core/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);