import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBeTf_b018bRQBoeh-trUTKYRn_a3aNOxA",
    authDomain: "slack-cp-ac4aa.firebaseapp.com",
    projectId: "slack-cp-ac4aa",
    storageBucket: "slack-cp-ac4aa.appspot.com",
    messagingSenderId: "222894998290",
    appId: "1:222894998290:web:07aa49e97695ffa671a9cb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};

  export default db;