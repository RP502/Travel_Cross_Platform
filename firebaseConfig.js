// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkBwJthwNy3eRN7_NhTVWDd_SuVY2X_wk",
  authDomain: "travel-react-native-8ac61.firebaseapp.com",
  projectId: "travel-react-native-8ac61",
  storageBucket: "travel-react-native-8ac61.appspot.com",
  messagingSenderId: "8514354114",
  appId: "1:8514354114:web:95ce2d59cd7c572234b45b",
  measurementId: "G-ZKW3MKY3FV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Set up Firebase Auth with persistent storage
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
