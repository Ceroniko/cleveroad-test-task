import firebase from "firebase/app";
import "firebase/auth";
import {
  FIREBASE_DATABASE,
  FIREBASE_DOMAIN,
  FIREBASE_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_SENDER_ID,
  FIREBASE_STORAGE_BUCKET,
} from "../constants/env";

console.log(
  FIREBASE_DATABASE,
  FIREBASE_DOMAIN,
  FIREBASE_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_SENDER_ID,
  FIREBASE_STORAGE_BUCKET
);

const app = firebase.initializeApp({
  apiKey: FIREBASE_KEY,
  authDomain: FIREBASE_DOMAIN,
  databaseURL: FIREBASE_DATABASE,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_SENDER_ID,
});

export default app;
