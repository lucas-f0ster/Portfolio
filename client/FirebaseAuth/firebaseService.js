import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from './config'

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const getAuthStatus = () => localStorage.getItem('isAuthenticated')

export {
  auth,
  getAuthStatus
}
