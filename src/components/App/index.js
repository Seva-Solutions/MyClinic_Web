import React from 'react';
import {
    BrowserRouter as Router,
    Route, Redirect
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
// import ElevateAppBar from '../components/Navbar/index'
import GoogleCalendar from '../googleCalendar';
import SignIn from '../Login'; 
import Landing from '../Home'; 
import ButtonAppBar from "../Navbar";

const App = () => (
    <Router>
            <ButtonAppBar/>

        <div style={{marginTop:-50}}>
            <Route path={ROUTES.CALENDAR} component={GoogleCalendar} />
            <Route path={ROUTES.LOGIN} component={SignIn} />
            <Route path={ROUTES.LANDING} component={Landing} />
            <Route exact path="/">
                <Redirect to="/Landing" />
            </Route>

        </div>
    </Router>
);
   
export default App; 