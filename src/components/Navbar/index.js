import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color:'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: window.$PrimaryColor,
    fontWeight: 'bold',
    fontFamily: window.$FontFamily,
    cursor:'pointer',
    textAlign:'center',
    fontSize:'34px'
  },
  title1: {
    flexGrow: 1,
    color: window.$PrimaryColor,
    fontWeight: 'bold',
    fontFamily: window.$FontFamily,
    cursor:'pointer',
    textAlign:'start',
    fontSize:'34px'
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <AppBar position="static" color="white">
        <Toolbar style={{marginLeft:'8%', marginRight:'8%'}}>
          <h2 className={classes.title}>
            MyClinic
          </h2>
        </Toolbar>
      </AppBar> */}
        <AppBar position="static" color="white">
        <Toolbar style={{marginLeft:'2%', marginRight:'2%'}}>
          <h2 className={classes.title1}>
            MyClinic
          </h2>
        </Toolbar>
      </AppBar>
    </div>
  );
}