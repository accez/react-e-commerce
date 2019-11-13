import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCdtITVpvFhd2EwHQn_66mJPx3o8C4l79Y",
  authDomain: "shop-db-2df22.firebaseapp.com",
  databaseURL: "https://shop-db-2df22.firebaseio.com",
  projectId: "shop-db-2df22",
  storageBucket: "shop-db-2df22.appspot.com",
  messagingSenderId: "873410308027",
  appId: "1:873410308027:web:8e4d97962596a77aa9069e",
  measurementId: "G-QPZ2Q5GB3E"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const faceBookProvider = new firebase.auth.FacebookAuthProvider();
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
faceBookProvider.setCustomParameters({ auth_type: 'reauthenticate' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signInWithFacebook = () => auth.signInWithPopup(faceBookProvider)

export default firebase