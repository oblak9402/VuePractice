// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmdXd43NWNH5CXrUj1uuphQoL7PRyiXuk",
  authDomain: "nodewithfirebase-f6247.firebaseapp.com",
  databaseURL: "https://nodewithfirebase-f6247-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nodewithfirebase-f6247",
  storageBucket: "nodewithfirebase-f6247.appspot.com",
  messagingSenderId: "17444780322",
  appId: "1:17444780322:web:41816cb514e59e9cf48d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};