import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; 
import {BrowserRouter} from 'react-router-dom'; 

import {Provider} from 'react-redux';
import store from './redux/store';
// Provider는 store가 리액트앱 전체를 감싸도록 한다. 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);