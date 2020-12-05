import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// render는 하나만 가능?
// StrictMode 안에 여러가지 가능
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
