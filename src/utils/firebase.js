// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAJULtP4XEWwn2vS6fCTebTWuCrKRAwuto',
  authDomain: 'petmatch-ebd2b.firebaseapp.com',
  projectId: 'petmatch-ebd2b',
  storageBucket: 'petmatch-ebd2b.appspot.com',
  messagingSenderId: '646053723618',
  appId: '1:646053723618:web:41f9b21b5f484d44260dbb',
  measurementId: 'G-XYR1JYZT7F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
