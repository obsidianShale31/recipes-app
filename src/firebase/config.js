import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyASUMCzquJBwTRXD9x815lcHFuvYPvsBO4",
  authDomain: "cooking-ninja-site-7f973.firebaseapp.com",
  projectId: "cooking-ninja-site-7f973",
  storageBucket: "cooking-ninja-site-7f973.appspot.com",
  messagingSenderId: "570963552885",
  appId: "1:570963552885:web:27915ca89255b28e48e63c"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore }