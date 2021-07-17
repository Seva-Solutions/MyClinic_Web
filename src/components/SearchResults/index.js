import React, { useLayoutEffect, useState } from 'react';
import styles from './results.module.css'; 
import ProfileCard from './profileCard';
import ReactWeeklyDayPicker from './week';
import Maps from '../GoogleMap';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const SearchResult = () => {
    let windowSize = useWindowSize()
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
                <ReactWeeklyDayPicker
                    beforeToday={false}
                    selectedDays={[new Date()]}
                    multipleDaySelect={false}
               />
            </div>
            <div className={styles.div4}> 
                <ProfileCard 
                    name="Dr. Prawesh Gaire" 
                    title="MD" 
                    clinicName="Deer Lake Stanford Clinic"
                    address={"1235 Deer Lake Ave. \n Oakville, ON \n L6T 5E4"}
                    distance={'5 km'}
                />
                <ProfileCard 
                    name="Dr. Prawesh Gaire" 
                    title="MD" 
                    clinicName="Deer Lake Stanford Clinic"
                    address={"1235 Deer Lake Ave. \n Oakville, ON \n L6T 5E4"}
                    distance={'5 km'}
                />
                <ProfileCard 
                    name="Dr. Prawesh Gaire" 
                    title="MD" 
                    clinicName="Deer Lake Stanford Clinic"
                    address={"1235 Deer Lake Ave. \n Oakville, ON \n L6T 5E4"}
                    distance={'5 km'}
                />
            </div>
        </div>
        <div className={styles.div5}>
        <Maps information={information} setLocation={setInformation} geoStyle={windowSize[0]>1171?styles.geoStyle:styles.geoStyle2} containerStyle={containerStyle}/>
        </div>
    </div>
    )
}

export default SearchResult;
