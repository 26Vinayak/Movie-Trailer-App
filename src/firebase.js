// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBdUTzoMymy1CXi0GHIWWgiDoMQGCG_iLo",
    authDomain: "netflix-clone-b77b5.firebaseapp.com",
    projectId: "netflix-clone-b77b5",
    storageBucket: "netflix-clone-b77b5.appspot.com",
    messagingSenderId: "38539498750",
    appId: "1:38539498750:web:74ea28acf450e5f73541af",
    measurementId: "G-MKYKHQDG9H"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);



const db = firebaseApp.firestore();
const auth = firebase.auth();



export {auth};
export default db;