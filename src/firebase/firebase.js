import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "navigus-f70ca.firebaseapp.com",
    databaseURL: "https://navigus-f70ca.firebaseio.com",
    projectId: "navigus-f70ca",
    storageBucket: "navigus-f70ca.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: "G-4RMW2LESYE"
}

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb