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

import NotFound from '../Notfound/pageNotFound'
import Sidebar from '../Sidebar/index'
import Footer from '../Footer/footer.js'
import Patients from '../Patients/patients.js'

const App = () => (
    
    <Router>
        
        <Sidebar/>
        <div style={{marginTop:-50}}>
            <Route path={ROUTES.CALENDAR} component={GoogleCalendar} />
            <Route path={ROUTES.LOGIN} component={SignIn} />
            <Route path={ROUTES.LANDING} component={Landing} />
            <Route path={ROUTES.PATIENT} component={Patients} />
            {/* <Route path={ROUTES.SIDEBAR} component={Sidebar} /> */}
            <Route exact path="/">
                <Redirect to="/Landing" />
            </Route>
            <Footer />
        </div>
    </Router>
);
   
export default App; 