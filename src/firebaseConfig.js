// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {REACT_APP_FIREBASE_API_KEY} from '@env';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: 'run-complete-01.firebaseapp.com',
  projectId: 'run-complete-01',
  storageBucket: 'run-complete-01.appspot.com',
  messagingSenderId: '1022123343687',
  appId: '1:1022123343687:web:17a0760a6bd79714401662',
  measurementId: 'G-9L2EZZ14QE',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export {firebaseConfig};
