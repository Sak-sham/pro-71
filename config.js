import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyADUZPlOKUkRx9_pnFumIz6S_swe-V5UZI",
    authDomain: "pro-71-ab642.firebaseapp.com",
    projectId: "pro-71-ab642",
    storageBucket: "pro-71-ab642.appspot.com",
    messagingSenderId: "346982065322",
    appId: "1:346982065322:web:3f5d7e52659ceb17341cd3"
  };
  
  const app = initializeApp(firebaseConfig);
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
