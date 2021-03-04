import firebase from 'firebase';

const firebaseConfig={
    //Fill in your firebase details here
    
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;