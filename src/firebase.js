
import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCOVPNT1YCfQ-fPCHBsq8_5jqL2M7bCRaA",
    authDomain: "yetl-90ede.firebaseapp.com",
    databaseURL: "https://yetl-90ede.firebaseio.com",
    projectId: "yetl-90ede",
    storageBucket: "yetl-90ede.appspot.com",
    messagingSenderId: "1029678976359"
  };
  firebase.initializeApp(config);

  const auth = firebase.auth();

export default auth;