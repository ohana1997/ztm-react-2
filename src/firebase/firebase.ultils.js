import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAR7SW5v6-5xldOs6nSAngbms6MTZpBVHE",
  authDomain: "ztm-learn-react.firebaseapp.com",
  projectId: "ztm-learn-react",
  storageBucket: "ztm-learn-react.appspot.com",
  messagingSenderId: "598665770753",
  appId: "1:598665770753:web:a7885caa55abebdb6a4d00",
  measurementId: "G-79Q6NJ3WW2",
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
