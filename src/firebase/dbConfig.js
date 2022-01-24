
import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey: "AIzaSyDyN9alk94Q6zgKH4HMezBhH4bIEoStWgU",
authDomain: "creacionessiv.firebaseapp.com",
projectId: "creacionessiv",
storageBucket: "creacionessiv.appspot.com",
messagingSenderId: "146385080145",
appId: "1:146385080145:web:fe3a0678b27e8f0bf7cd70"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp = _ => {
    return app;
}