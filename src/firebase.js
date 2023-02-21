import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVMHHvNkLlQ4B_mHlQHEIm8YJ-KIXYbTk",
  authDomain: "clone-6b79d.firebaseapp.com",
  projectId: "clone-6b79d",
  storageBucket: "clone-6b79d.appspot.com",
  messagingSenderId: "922506806033",
  appId: "1:922506806033:web:834fcf78fa6627192402b0",
  measurementId: "G-WQ53SEWS0S",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
