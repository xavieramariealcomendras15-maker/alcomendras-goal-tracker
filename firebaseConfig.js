import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXQGl_H5X_nyGakYjq4np9st3UCqFVvzk",
  authDomain: "goalproject-xma.firebaseapp.com",
  projectId: "goalproject-xma",
  storageBucket: "goalproject-xma.firebasestorage.app",
  messagingSenderId: "294113573909",
  appId: "1:294113573909:web:625e87a3875ad47b93a21c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)