import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";



// ✅ Firebase konfigurimi
const firebaseConfig = {
  apiKey: "AIzaSyAES_43wpOXZKBD755o0duTY54J9vjVXR4",
  authDomain: "lms-app-22.firebaseapp.com",
  projectId: "lms-app-22",
  storageBucket: "lms-app-22.appspot.com",
  messagingSenderId: "431965045185",
  appId: "1:431965045185:web:80a9fb1adb672a60f6ef40",
};

// ✅ Inicializimi i Firebase
const app = initializeApp(firebaseConfig);

// ✅ Inicializimi i shërbimeve të Firebase
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// ✅ Eksportimi për përdorim në aplikacion
export { app, db, storage, auth };
