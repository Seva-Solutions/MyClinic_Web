import React, { Component } from "react";
import Map from './map';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

export default function MyMap(props){
    const [value, setValue] = React.useState(30);
    const [zoom, setZoom] = React.useState(9.5);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        zoomValue();
    };
    const zoomValue = () =>{
        if ( 0 < value <= 2){
          return(setZoom(14) )
        }
        else if ( 2 < value <= 4){
          return( 13 )
        }
        else if ( 4 < value <= 6){
          return( 12.5 )
        }
        else if ( 6 < value <= 11){
          return( 11.5 )
        }
        else if ( 11 < value <= 20){
          return( 10.5 )
        }
        else if ( 20 < value <= 40){
          return( 9.5 )
        }
        else if ( 40 < value <= 80){
          return( 8.5 )
        }
        else if ( 80 < value <= 165){
          return( 7.5 )
        }
        else if ( 165 < value <= 330){
          return( 6.5 )
        }
        else if ( 330 < value <= 675){
          return( 5.5 )
        }
        else return(5)
      }

    return(
        <div>
            <Map information={props.information} setLocation={props.setLocation} radius={value} mapZoom={zoom} geoStyle={props.geoStyle} containerStyle={props.containerStyle}/>
            <div style={{padding:'0px 5px',display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'-50px'}}>
                <h4>DISTANCE</h4>
                <Slider style={{width:'50%'}} value={value} min={1} max={1000} onChange={handleChange} aria-labelledby="continuous-slider" />
                <h5>{value} km</h5>
                <Button style={{color:'white', background:'#2B64D2', width:'10%'}} onClick={()=>props.setOpen(false)}> Apply</Button>
            </div>
        </div>
    )
}