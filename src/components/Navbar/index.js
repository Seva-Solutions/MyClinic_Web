import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SignIn from '../Login';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';


// import { green, purple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
},
menuButton: {
    marginRight: theme.spacing(2),
},
title: {
    flexGrow: 1,
    color: '#0DAC99',
    fontSize: '30px',
    fontFamily: 'quicksand',
    fontWeight: 500,
},
signUpBtn :{
    backgroundColor: '#0DAC99',
    textTransform: 'none',
    fontSize: '18px',
},signInBtn :{
    textTransform: 'none',
    fontSize: '18px',
}
}));

const contentStyle2 = {
    width: '700px',
    height: '600px',
    background: '#FFFFFF',
    borderRadius: '16px', 
    marginTop: '80px',
};

export default function ButtonAppBar() {
const classes = useStyles();

return (
    <div >
    <AppBar style={{backgroundColor: 'white'}}>
        <Toolbar >
        <Typography className={classes.title}>
            MyClinic
        </Typography>
        
        <Popup trigger={<Button variant="h3" className={classes.signInBtn}>Sign In</Button>} 
                modal contentStyle={contentStyle2}>
                  {close => <SignIn close={close} />}
        </Popup>

        <Button variant="h3" className={classes.signUpBtn}>Sign Up</Button>
        </Toolbar>
    </AppBar>
    </div>
);
}
