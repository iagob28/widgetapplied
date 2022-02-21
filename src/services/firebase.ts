import firebase from 'firebase/compat/app'
import { GithubAuthProvider } from 'firebase/auth'

import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBNIlzFar4F4srniXXuZ0GahYiVk1cDyv4',
  authDomain: 'moveit-c6764.firebaseapp.com',
  projectId: 'moveit-c6764',
  storageBucket: 'moveit-c6764.appspot.com',
  messagingSenderId: '417246209797',
  appId: '1:417246209797:web:b27b2425546935a590f96c',
  // apiKey: process.env.REACT_APP_VERCEL_API_KEY,
  // authDomain: process.env.REACT_APP_VERCEL_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_VERCEL_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_VERCEL_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_VERCEL_MESSAGE_SENDER_ID,
  // appId: process.env.REACT_APP_VERCEL_APP_ID,
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.firestore()
const provider = new GithubAuthProvider()

export { firebase, auth, database, provider }
