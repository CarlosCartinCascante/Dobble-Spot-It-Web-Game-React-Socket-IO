// Import the functions you need from the SDKs you need
const {initializeApp} = require('firebase/app');
const {getFirestore} = require('firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyBbR_H88SFSD29fr5Hk4oE35PHWiW8JgCI",
  authDomain: "spot-it-e5c2f.firebaseapp.com",
  projectId: "spot-it-e5c2f",
  storageBucket: "spot-it-e5c2f.appspot.com",
  messagingSenderId: "627356267877",
  appId: "1:627356267877:web:ee3004d6d793ded3661d8c",
};

// Initialize Firebase
// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
module.exports = {db}