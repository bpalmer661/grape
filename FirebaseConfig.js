import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCXnyTMvwD3mAlVCXk57KIKOicq-I1TAOs",
    authDomain: "grape-5df6a.firebaseapp.com",
    databaseURL: "https://grape-5df6a.firebaseio.com",
    projectId: "grape-5df6a",
    storageBucket: "grape-5df6a.appspot.com",
    messagingSenderId: "827131158449",
    appId: "1:827131158449:web:1b53149f85c52167dc6790",
    measurementId: "G-5QGW2Y40GL"
};



firebase.initializeApp(firebaseConfig);

const storage = firebase.storage().ref;

export  {storage, firebase as default};

