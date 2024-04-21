// Import the functions you need from the SDKs you need
import * as firebase from "firebase"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// import { getFirestore } from "firebase/firestore";

// import auth from '@react-native-firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6-VXbtZZtalAjfZTD2KY89mCX4hHWzF8",
  authDomain: "donationapp-e66ea.firebaseapp.com",
  projectId: "donationapp-e66ea",
  storageBucket: "donationapp-e66ea.appspot.com",
  messagingSenderId: "872412813985",
  appId: "1:872412813985:web:6cf16742fb7afd2e7a2ee0",
  measurementId: "G-FN5FDHRJ69"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Firebase Authentication and get a reference to the service

// export {authPersist}
// export const FIREBASE_APP = app;
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTHH = auth(FIREBASE_APP);

