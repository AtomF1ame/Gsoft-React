import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import App as default, no curly braces
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);