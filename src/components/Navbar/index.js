import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

// const ContinueButton = withStyles((theme) => ({
// root: {
//     color: theme.palette.getContrastText(purple[600]),
//     borderRadius:44,
//     backgroundColor: '#0DAC99',
//     '&:hover': {
//     backgroundColor: '#003ba0',
//     },
// },
// }))(Button);

export default function ButtonAppBar() {
const classes = useStyles();

return (
    <div >
    <AppBar style={{backgroundColor: 'white'}}>
        <Toolbar >
        <Typography className={classes.title}>
            MyClinic
        </Typography>
        
        <Button variant="h3" className={classes.signInBtn}>Sign In</Button>
        <Button variant="h3" className={classes.signUpBtn}>Sign Up</Button>
        </Toolbar>
    </AppBar>
    </div>
);
}
