import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {signin} from '../Firebase/auth';
import Popup from 'reactjs-popup';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import * as ROUTES from '../../constants/routes';
import Button from '@material-ui/core/Button';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import styles from './login.module.css';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import glogo from './google-icon.svg';
import elogo from './email1.svg';
import alogo from './apple.svg';
import { green, purple } from '@material-ui/core/colors'; 

const SignIn = ({close}) => (
  <box className={styles.box}>
    <CloseOutlinedIcon style={{ height: 40, width: 40 }} className={styles.cross} onClick={close}/>
    <h1 className={styles.header}>Log in</h1>
      <box className={styles.rectangle}>
        <div>
          <SignInGoogle />
        </div>
        <hr className={styles.line1}></hr>
        <p className={styles.or}>or</p>
        <hr className={styles.line2}></hr>
        <Login />
      </box>
  </box>
);

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { error: null };
  }
 
  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            roles: {},
          });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  render() {
    const { error } = this.state;
 
    return (
      <form onSubmit={this.onSubmit}>
        <button
          className={styles.google}>
            <img src={glogo} className={styles.logo} alt={'google'}/>
              <p ClassName={styles.signupgoogle} >Log in with Google</p>
        </button>
 
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

class Login extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  signInCallback(val){
    // console.log(val);
    if (val['usertype'] == 'Contractor'){
      window.location.href='/contractorexplore'
    }else{
      window.location.href='/homeownerexplore'

    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
 

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      // this.setState({ error: error.message });
    }
  }

  loginClicked(event){
    window.location.href='/calendar'
  }

  render() {
    return (
      <div className="container">
        <form className="mt-5 py-5 px-5" autoComplete="off" onSubmit={this.handleSubmit}>         
          <h3 className={styles.email}>Email</h3>
          <div className={styles.rectangle1}>
            <input className={styles.input1} placeholder="Enter your email address" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
          </div>
          <h3 className={styles.password}>Password</h3>
          <div className={styles.rectangle2}>
            <input className={styles.input2} placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
          </div>
          <div>
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
            <LoginButton type="submit" className={styles.loginbutton} onClick={this.loginClicked}>
              <p className={styles.login}>Log in </p>
            </LoginButton>
          </div>
          <p className={styles.text2}>Don't have an account?</p> 
            <Popup trigger={<p className={styles.signup}> Sign up</p>} modal contentStyle={contentStyle}>
              {/* {close => <SignUpPage close={close} />} */}
            </Popup>
        </form>
      </div>
    )
  }
}
const contentStyle = {
  width: '702px',
  height: '640px',
  background: '#FFFFFF',
  borderRadius: '16px',
};

const LoginButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    borderRadius:44,
    backgroundColor: '#2B64D2',
    '&:hover': {
      backgroundColor: '#003ba0',
    },
  },
}))(Button);

export default SignIn;