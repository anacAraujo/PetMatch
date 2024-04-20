// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore';

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
const db = getFirestore(app);

// Get a list of preferences from the database
async function getPreferencesDB() {
  console.log('getPreferencesDB currentUser: ', auth?.currentUser);

  try {
    const localPreferences = localStorage.getItem('preferences');
    if (localPreferences) {
      return JSON.parse(localPreferences);
    }

    const docRef = doc(db, 'preferences', auth.currentUser.uid);
    const userPreferences = await getDoc(docRef);
    console.log('firestore userPreferences: ', userPreferences.data());
    return userPreferences.data();
  } catch (error) {
    console.error('Error getting preferences: ', error.stack);
  }
}

async function setPreferencesDB(preferences) {
  console.log('setPreferencesDB currentUser: ', auth?.currentUser);

  try {
    const docRef = doc(db, 'preferences', auth.currentUser.uid);
    await setDoc(docRef, preferences);

    localStorage.setItem('preferences', JSON.stringify(preferences));
  } catch (error) {
    console.error('Error setting preferences: ', error.stack);
  }
}

async function deletePreferencesDB() {
  console.log('deletePreferencesDB currentUser: ', auth?.currentUser);

  try {
    const docRef = doc(db, 'preferences', auth.currentUser.uid);
    await deleteDoc(docRef);

    localStorage.removeItem('preferences');
  } catch (error) {
    console.error('Error deleting preferences: ', error.stack);
  }
}

export { auth, googleProvider, db, getPreferencesDB, setPreferencesDB, deletePreferencesDB };
