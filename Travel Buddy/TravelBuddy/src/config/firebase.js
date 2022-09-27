import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getStorage,ref} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB0-TD87QGmazhuwCvUNxIrja_x5PsFLdY",
    authDomain: "react-travel-buddy-55aaf.firebaseapp.com",
    projectId: "react-travel-buddy-55aaf",
    storageBucket: "react-travel-buddy-55aaf.appspot.com",
    messagingSenderId: "159204393557",
    appId: "1:159204393557:web:4b7d65650515de9521cadc"
};

const myApp=firebase.initializeApp(firebaseConfig);
const dataBase = firebase.firestore();
const storage= getStorage(myApp);
console.log(storage,"storageReference");

export {storage};

export default dataBase;