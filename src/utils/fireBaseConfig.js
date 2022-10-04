// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu9LfvkW7SaEDNtDEyT_Asn8W-xr9J_Ws",
  authDomain: "apple-concept.firebaseapp.com",
  projectId: "apple-concept",
  storageBucket: "apple-concept.appspot.com",
  messagingSenderId: "393069811764",
  appId: "1:393069811764:web:a12b1796ac2949ba999261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
