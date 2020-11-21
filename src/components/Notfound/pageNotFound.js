import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../asset/lol.jpg';

// import styles from './style.component.css'



class NotFoundPage extends React.Component{
    render(){
 
        return <div>
                  <text style={{ position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",fontSize:'40px', color:' white' }}>
                      This page is as dry as your DMs</text>
                    <text style={{ position: "absolute", top: "60%", left: "50%",
                  transform: "translate(-50%, -50%)",fontSize:'30px', color:' white' }}>
                      <Link style={{color:'black'}} to="/" > Click Here </Link> To go back to Homepage</text>

            {/* <p style={{ textAlign:"center", marginTop: 70, }}>
              <Link to="/">Go to Home </Link>
            </p> */}
            <img src={PageNotFound}  style={{maxWidth:'100%', minWidth:'100%'}}/>
        
           
          </div>;
    }
}
export default NotFoundPage;