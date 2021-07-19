import React from 'react';
import {
    BrowserRouter as Router,
    Route, Redirect
} from 'react-router-dom';
import Landing from '../Home'; 
import NotFound from '../Notfound/pageNotFound';
import Footer from '../Footer/footer.js';
import NavBar from '../Navbar';
import SearchResults from '../SearchResults';
import DocProfile from '../docProfile';

const App = () => (
    
    <Router>
        <NavBar/>
        <Route path='/landing' component={Landing} />
        <Route path='/searchresults' component={SearchResults} />
        <Route path='/docProfile' component={DocProfile} />
        <Route exact path="/">
            <Redirect to="/Landing" />
        </Route>
        {/* <Footer /> */}
    </Router>
);
   
export default App; 