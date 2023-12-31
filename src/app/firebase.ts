// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf7eeVl3PqPPgfzJ0JY2OQcabepSkaGRQ",
  authDomain: "authnex-70084.firebaseapp.com",
  projectId: "authnex-70084",
  storageBucket: "authnex-70084.appspot.com",
  messagingSenderId: "668862528831",
  appId: "1:668862528831:web:fa37f9d5c16298e1b1e78a"
};

// Initialize Firebase
const app = getApps().length?getApp():initializeApp(firebaseConfig);
const auth=getAuth();
export{app,auth};