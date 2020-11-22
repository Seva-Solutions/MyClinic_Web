import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './index.module.css';
// import Review from "../Review";
// import Popup from "reactjs-popup";


const Footer = () => (
        <div className={styles.mainFooter}>
            <div className={styles.container}>
                <div className={styles.row}>

                    {/* <Popup trigger={<p className={styles.col}> About</p>} 
                        modal contentStyle={contentStyle}>
                        {close => <Review close={close} />}
                    </Popup> */}

                    <div className={styles.col}>
                        <h3>About Us</h3>
                    </div>
                    <div className={styles.col}>
                        <h3>Contact Us</h3>
                    </div>
                    <div className={styles.col}>
                        <h3>Careers</h3>
                    </div>
                    <div className={styles.col}>
                        <h3>Resources</h3>
                    </div>
                </div>
                {/* <div className={styles.images}>
                    <img src={require('./appleLogo.png')} className={styles.image1}/>
                    <img src={require('./googleLogo.png')} className={styles.image2}/>
                </div> */}
                
            </div>
                {/* <div className={styles.EndText}>
                    <p>&copy;{new Date().getFullYear()} BOOKTRADES INC.</p> 
                    <p>All rights reserved. Google, Google Play, YouTube and other marks are trademarks of Google Inc. </p>
                </div> */}
            
        </div>
);
// const contentStyle = {
//     width: '1100px',
//     height: '850px',
//     background: '#FFFFFF',
//     borderRadius: '16px',
// };


export default Footer;
// export {Footer};