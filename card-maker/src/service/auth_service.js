import firebase from 'firebase';
import firebaseApp from './firebase';


class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    console.log("authProvider", authProvider);
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;