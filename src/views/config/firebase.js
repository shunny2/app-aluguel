import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore'
let firebaseConfig = {
    apiKey: "AIzaSyAa5Rut2__qWVnzdDQiEBN1PkgbLgMVjT4",
    authDomain: "app-aluguel-3e7c1.firebaseapp.com",
    projectId: "app-aluguel-3e7c1",
    storageBucket: "app-aluguel-3e7c1.appspot.com",
    messagingSenderId: "720691159758",
    appId: "1:720691159758:web:b77ca5782c5f40c438269f"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;