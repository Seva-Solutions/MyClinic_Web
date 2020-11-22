import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountInfo from '../AccountInfo/accountInfo'
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { Link, withRouter, BrowserRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SignIn from '../Login';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'fixed',
//   },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
},
title: {
    
    color: '#0DAC99',
    fontSize: '30px',
    fontFamily: 'quicksand',
    fontWeight: 500,
    marginRight: 300 ,
    
},
signUpBtn :{
    backgroundColor: '#0DAC99',
    textTransform: 'none',
    fontSize: '18px',
},signInBtn :{
    textTransform: 'none',
    fontSize: '18px',
},
appointmenttitle : {
    color: '#0DAC99',
    marginTop: 5,
    fontWeight: 500,
    fontSize: 20,
    marginRight: 450,
    postion: 'absolute'
    
},

}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const contentStyle2 = {
    width: '700px',
    height: '600px',
    background: '#FFFFFF',
    borderRadius: '16px', 
    marginTop: '80px',
};

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
      style={{backgroundColor: 'white'}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
          styles={{backgroundColor:'white'}}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton )}
          >
               <MenuIcon />
        </IconButton>
          <Typography className={classes.title}>
           MyClinic
        </Typography>
        <Typography title className={classes.appointmenttitle}>
            Appointment Management
        </Typography>
        {/* <AccountInfo /> */}
        <Popup trigger={<Button variant="h3" className={classes.signInBtn}>Sign In</Button>} 
                modal contentStyle={contentStyle2}>
                  {close => <SignIn close={close} />}
        </Popup>
        <Button variant="h3" className={classes.signUpBtn}>Sign Up</Button>
        </Toolbar>
       
      </AppBar>
      <Drawer
        className={classes.drawer}
        // variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[['Calendar' , '/calendar'], ['Patients' , '/patients'],['Settings' , '/settings']].map((values, index) => {
            debugger
            const text = values[0];
            const link = values[1];
            return (
              <div>
                <Link to={link} onClick={handleDrawerClose}>
                    <ListItem button key={text} >
                    <ListItemText primary={text} />
                {index % 2 === 0 ? <Brightness1Icon  style={{color: "#0DAC99"}}/> : <Brightness1Icon  style={{color: "#0DAC99"}}/>}
                    </ListItem>
                </Link>
              </div>             
            );
        })}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
  
      </main>
    </div>
  );
}
