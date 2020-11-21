import React, { Component } from 'react';
import styles from './landing.module.css'; 
import Cards from './card';

const Landing = () => (
    <div className={styles.maindiv}>
        <PageWrap/>
    </div>
)
const PageWrap = () => (
    <div>
        <div>
            <div className={styles.textpic}>
                <div className={styles.textbox}>
                    <h3 className={styles.header1}>The Official page for clinics to login to  MyClinic and view patient bookings</h3>
                    <div className={styles.cards}>
                        <Cards number="140" name="Clinics Across Ontario"/>
                        <Cards number="151,416" name="Active Patients"/>
                        <Cards number="786" name="Physicians and Specialists"/>
                        <Cards number="100%" name="Satisfaction"/>
                    </div>
                    <p className={styles.p2}>MyClinic lets you skip the back and forth and choose your own appointment time</p>

                </div>    
                <box className={styles.builder}></box>
            </div>
        </div>
    </div>
)

export default Landing;
export {Landing}; 