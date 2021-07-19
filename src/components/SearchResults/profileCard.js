import React, { Component } from 'react';
import styles from './results.module.css'; 
import Image from './profile.jpg';

const ProfileCard = (props) => {
    const splittedAddress = props.address.split('\n').map(str => <p>{str}</p>);
    let day1 = ["10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:15PM", "4:50PM"]
    let day2 = ["10:00AM", "11:00AM"]
    let day3 = ["10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM"]
    let day4 = ["10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM"]
    let day5 = ["10:00AM", "11:00AM", "12:00PM"]
    let day6 = ["10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM"]
    let day7 = ["2:00PM"]

    function TimeTag (list){
        let tempList = [];
        for (let i in list){
            if (i < 5){
                tempList.push(
                    <p className={styles.tag}>{list[i].toString()}</p>
                )
            }
        }
        while (tempList.length < 5){
            tempList.push(
                <p className={styles.tag}>--</p>
            )
        }
        return tempList;
    }
    return(
    <>
    <div className={styles.cardDiv1}>
        <div className={styles.cardDiv2}>
            <div>
                <h2>{props.name}, {props.title}</h2>
                <p style={{color:"#0DAC99"}}>{props.clinicName}</p>
                <p style={{lineHeight:'5px'}}>{splittedAddress}</p>
                <p style={{color:'#848484', fontSize:'12px'}}>{props.distance}&thinsp;away</p>
            </div>
            <img src={Image} alt="" className={styles.image}/>
        </div>
        <div className={styles.cardDiv3}>
            <div className={styles.cardDiv4}>{TimeTag(day1)}</div>
            <div className={styles.cardDiv4}>{TimeTag(day2)}</div>
            <div className={styles.cardDiv4}>{TimeTag(day3)}</div>
            <div className={styles.cardDiv4}>{TimeTag(day4)}</div>
            <div className={styles.cardDiv4}>{TimeTag(day5)}</div>
            <div className={styles.cardDiv4}>{TimeTag(day6)}</div>
            <div className={styles.cardDiv4}>{TimeTag(day7)}</div>
        </div>
    </div>
    <a className={styles.link}>See all availabilities...</a>
    </>
    )
}

export default ProfileCard;
