import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAH4wjlKZsMYhCXAl__BOwzMrVT47DoA6k",
    authDomain: "mycrwn.firebaseapp.com",
    databaseURL: "https://mycrwn.firebaseio.com",
    projectId: "mycrwn",
    storageBucket: "mycrwn.appspot.com",
    messagingSenderId: "36369318121",
    appId: "1:36369318121:web:285d2da3256b5f6cc8b078",
    measurementId: "G-DC017JZZR7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  