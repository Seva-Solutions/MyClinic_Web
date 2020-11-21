import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; 
import './components/global.styles.css';
import Navbar from './components/Navbar/index'
ReactDOM.render(
  <div>
    <Navbar />
    <App />
  </div>,
    
  document.getElementById('root')
);

