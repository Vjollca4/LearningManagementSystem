// src/config/firebase.ts

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAES_43wpOXZKBD755o0duTY54J9vjVXR4",
  authDomain: "lms-app-22.firebaseapp.com",
  projectId: "lms-app-22",
  storageBucket: "lms-app-22.firebasestorage.app",
  messagingSenderId: "431965045185",
  appId: "1:431965045185:web:80a9fb1adb672a60f6ef40",
  measurementId: "G-ZT1Y38SMDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, storage };
