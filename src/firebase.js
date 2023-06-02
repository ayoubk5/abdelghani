import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0xKFTsD5tHK0Okdp2-WL-1WU0pL5rxcA",
  authDomain: "d-medical-a5e56.firebaseapp.com",
  databaseURL: "https://d-medical-a5e56-default-rtdb.firebaseio.com",
  projectId: "d-medical-a5e56",
  storageBucket: "d-medical-a5e56.appspot.com",
  messagingSenderId: "669013745277",
  appId: "1:669013745277:web:4d4246564b03c252c49b14",
  measurementId: "G-VBD7NPGTKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); 
const auth=getAuth(app);
//Initialize Firebase Authentification and get a reference to the service
export  {auth,app}