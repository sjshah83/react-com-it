import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0-TD87QGmazhuwCvUNxIrja_x5PsFLdY",
    authDomain: "react-travel-buddy-55aaf.firebaseapp.com",
    projectId: "react-travel-buddy-55aaf",
    storageBucket: "react-travel-buddy-55aaf.appspot.com",
    messagingSenderId: "159204393557",
    appId: "1:159204393557:web:4b7d65650515de9521cadc"
};

firebase.initializeApp(firebaseConfig);
const dataBase = firebase.firestore();

export default dataBase;