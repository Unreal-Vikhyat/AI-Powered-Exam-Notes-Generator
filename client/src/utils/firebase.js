
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  authDomain: "examnotesai-9f0df.firebaseapp.com",
  projectId: "examnotesai-9f0df",
  storageBucket: "examnotesai-9f0df.firebasestorage.app",
  messagingSenderId: "286518424024",
  appId: "1:286518424024:web:33bdf5d210ced37ea882ad",
  measurementId: "G-9ZHYKD2RJF"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
