import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; 
import './components/global.styles.css';
import Sidebar from './components/Sidebar/index.js'
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

