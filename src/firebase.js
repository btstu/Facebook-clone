import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDu3caLK2EiA4UDh2aRcI_z2puwcKD-XTI",
    authDomain: "fb-clone-49f81.firebaseapp.com",
    databaseURL: "https://fb-clone-49f81.firebaseio.com",
    projectId: "fb-clone-49f81",
    storageBucket: "fb-clone-49f81.appspot.com",
    messagingSenderId: "602952327200",
    appId: "1:602952327200:web:047586d32219d8efd85c45"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;