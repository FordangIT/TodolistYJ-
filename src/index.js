import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; 

// Provider는 store가 리액트앱 전체를 감싸도록 한다. 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);