import React, { useLayoutEffect, useState } from 'react';
import styles from './docProfile.module.css'; 
import Image from '../SearchResults/profile.jpg';
import Maps from '../GoogleMap';

const DocProfile = () => {
    const address = "1235 Deer Lake Ave. \n Oakville, ON \n L6T 5E4";
    const splittedAddress = address.split('\n').map(str => <p style={{lineHeight:'14px', padding:'0px', margin:'1px'}}>{str}</p>);
    let [information, setInformation] = useState({"address":'Where is your project?'});
    const containerStyle={
        width: '100%',
        height: '100%',
        marginLeft:'auto',
        marginRight:'auto',
    }
    return(
    <div className={styles.div1}>
        <div className={styles.div2}>
            <div className={styles.div3}>
                <img alt="" className={styles.image} src={Image}/>
                <div className={styles.div4}>
                    <h2>Dr. Prawesh Gaire, MD</h2>
                    <p style={{color:"#0DAC99"}}>Deer Lake Stanford Clinic</p>
                    <p >{splittedAddress}</p>
                    <p style={{color:'#848484', fontSize:'12px'}}>10 km&thinsp;away</p>
                </div>
            </div>
            <div className={styles.div5}>
                <h2>About</h2>
                <p>Dr. Omer Syed is a world renowned doctor in the subtle art of not giving a f***. He will let you know exactly why your shit hurts and how your fatasss can get up off the couch and work in some exercise</p>
            </div>
            <div className={styles.div6}>
                <h2>Office Location</h2>
                <Maps information={information} setLocation={setInformation} geoStyle={styles.geoStyle} containerStyle={containerStyle}/>
            </div>
        </div>
        <div className={styles.div7}>
            Calendar
        </div>
    </div>
    )
}

export default DocProfile;
