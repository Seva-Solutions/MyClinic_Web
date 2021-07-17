import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; 
import './components/global.styles.css';
// import Firebase, { FirebaseContext } from './components/Firebase';
import "@fontsource/quicksand";
import './index.css';

window.$PrimaryColor = '#0DAC99';
window.$FontFamily = 'Quicksand';

ReactDOM.render(
  // <FirebaseContext.Provider value={new Firebase()}>
    <App />,
  // </FirebaseContext.Provider>,
  document.getElementById('root')
);

