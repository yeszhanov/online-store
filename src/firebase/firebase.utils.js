import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth'

const config =
{
  apiKey: "AIzaSyApoZoDzBSmZiwg7lsi2sdUl_XB5jSjKm0",
  authDomain: "online-store-db-48e75.firebaseapp.com",
  databaseURL: "https://online-store-db-48e75.firebaseio.com",
  projectId: "online-store-db-48e75",
  storageBucket: "online-store-db-48e75.appspot.com",
  messagingSenderId: "330711980702",
  appId: "1:330711980702:web:cbecd842d908835f39f98f"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
