import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyBoG9gX4wJZvWgieOU877rJtqggn3D39x8",
  authDomain: "crwn-db-34b88.firebaseapp.com",
  databaseURL: "https://crwn-db-34b88.firebaseio.com",
  projectId: "crwn-db-34b88",
  storageBucket: "crwn-db-34b88.appspot.com",
  messagingSenderId: "592360772420",
  appId: "1:592360772420:web:943946f512b6e7f9e2bd11",
  measurementId: "G-B1J2DQVEPR"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
