//vsё norm
import firebase from 'firebaseTwi';

const firebaseConfig = {
  apiKey: "AIzaSyAFF5hb6Pvv2Im_r9z_hX-bPfe34cYw9Rs",
  authDomain: "twitter-clone-61585.firebaseapp.com",
  databaseURL: "twitter-clone-61585",
  projectId: "twitter-clone-61585",
  storageBucket: "twitter-clone-61585.appspot.com",
  messagingSenderId: "112366482663",
  appId: "1:112366482663:web:d7cc926b89a1152da65e42",
  measurementId: "G-FT601VE2D6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;