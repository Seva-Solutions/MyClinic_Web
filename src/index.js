import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; 
import './components/global.styles.css';
import Sidebar from './components/Sidebar/index.js'
ReactDOM.render(
  <div>
    {/* <Sidebar  /> */}
    {/* <Navbar /> */}
    <App />
  </div>,
    
  document.getElementById('root')
);

