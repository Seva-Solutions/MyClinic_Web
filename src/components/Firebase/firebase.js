import app from 'firebase/app'; 
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCYYxZl_9Qbju4ZswpDkr9OpWZDqyyjSWo",
    authDomain: "myclinic-bef2e.firebaseapp.com",
    databaseURL: "https://myclinic-bef2e.firebaseio.com",
    projectId: "myclinic-bef2e",
    storageBucket: "myclinic-bef2e.appspot.com",
    messagingSenderId: "473457907819",
    appId: "1:473457907819:web:618e5dede855ba7d9c792e",
    measurementId: "G-CFTTBBFQHC"
}; 

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();

        this.googleProvider = new app.auth.GoogleAuthProvider(); 
    }
    
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password); 
        
    doSignInWithGoogle = () =>
        this.auth.signInWithPopup(this.googleProvider);
    
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}
   
export default Firebase; 
export const auth = firebase.auth; 