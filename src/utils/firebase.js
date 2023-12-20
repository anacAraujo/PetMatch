// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

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
const getPreferences = async () => {
  const user = auth.currentUser;

  const preferencesCollectionRef = collection(db, 'preferences');

  console.log(user);
  try {
    const data = await getDocs(preferencesCollectionRef);
    const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const userPreferences = filteredData.filter((item) => item.id_user === user.uid);

    return userPreferences;
  } catch (error) {
    console.error(error);
  }
};

export { auth, googleProvider, db, getPreferences };
