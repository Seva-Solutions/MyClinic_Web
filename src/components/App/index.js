import React from 'react';
import {
    BrowserRouter as Router,
    Route, Redirect
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
// import ElevateAppBar from '../components/Navbar/index'
import GoogleCalendar from '../googleCalendar';

const App = () => (
    <Router>
        <div style={{marginTop:50}}>
            <Route  path={ROUTES.CALENDAR} component={GoogleCalendar} />
        </div>
    </Router>
);
   
export default App;