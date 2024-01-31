import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCyMhSxH2Pjtau0c8UOljYT124FClc858I",
  authDomain: "e-ride-app-abd24.firebaseapp.com",
  projectId: "e-ride-app-abd24",
  storageBucket: "e-ride-app-abd24.appspot.com",
  messagingSenderId: "960654101555",
  appId: "1:960654101555:web:45c61f7d1514a7a1baa746"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
