import { auth } from '../FirebaseAuth/firebaseService'

export const loginSuccess = () => {
  return {
    type: 'LOGIN_SUCCESS',
    currentUser: auth.currentUser.toJSON()
  }
}

export const registerSuccess = () => {
  return {
    type: 'REGISTER_SUCCESS',
    currentUser: auth.currentUser.toJSON()
  }
}

export const register = (email, password) => {
  return (dispatch) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        return dispatch(registerSuccess())
      })
      .catch(err => console.error(err))
  }
}

export const login = (email, password) => {
  return (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        return dispatch(loginSuccess())
      })
      .catch(err => console.error(err))
  }
}
