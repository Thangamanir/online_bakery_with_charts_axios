import firebase from 'firebase';

const firebaseConfig={
    //Fill in your firebase details here
    apiKey: "AIzaSyDR5ZGNKSbpZ71uXOtH99-tX5qSWzgBr9M",
    authDomain: "bt3103-2020.firebaseapp.com",
    databaseURL: "https://bt3103-2020.firebaseio.com",
    projectId: "bt3103-2020",
    storageBucket: "bt3103-2020.appspot.com",
    messagingSenderId: "587840778474",
    appId: "1:587840778474:web:e5cd103f5580b10d7de793",
    measurementId: "G-XW88WQ8LRR"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;