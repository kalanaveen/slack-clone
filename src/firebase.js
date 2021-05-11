import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyA_sx8-ZIS6ORROyYYnzhZVI3nYeX4WJ9o",
  authDomain: "slack-clone-4f05a.firebaseapp.com",
  projectId: "slack-clone-4f05a",
  storageBucket: "slack-clone-4f05a.appspot.com",
  messagingSenderId: "160946847289",
  appId: "1:160946847289:web:3ce2648386fccc08d057e8",
  measurementId: "G-JR1VSW6TG3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider,db };
