import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './Globalstyles';

ReactDOM.render(
  <Provider store={store}>
      <GlobalStyle/>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
