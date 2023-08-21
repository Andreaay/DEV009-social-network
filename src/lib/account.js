// eslint-disable import/no-duplicates
//  eslint-disable max-len */
import {
  createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider,
  signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence, updateProfile,
} from 'firebase/auth';
import { auth } from './post';

export const getCurrentUser = () => {
  const user = getAuth().currentUser;
  return user;
};

export const addUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
// PROFILE
export function getProfile() {
  const auth = getAuth();
  const user = auth.currentUser;
  const userInfo = [user.displayName, user.email, user.photoURL];
  return userInfo;
}
export function createProfile(displayName, photoURL) {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName,
    photoURL,
  }).then(() => {
    console.log('Se creo correctamente el nombre de ususario y url');
  }).catch((error) => {
    console.log(error);
  });
  console.log(user);
}
export function signinUser(email, password, callback) {
  setPersistence(auth, browserSessionPersistence)
    .then(() => signInWithEmailAndPassword(auth, email, password))
    .then((userCredential) => {
      const { user } = userCredential;
      callback(true);
      console.log(setPersistence);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      callback(false);
    });
}
export const provider = new GoogleAuthProvider();
export const enterGoogle = () => signInWithPopup(auth, provider);

// boton sign out
export function logOutUser(callback) {
  signOut(auth)
    .then(() => {
      callback(true);
      // Sign-out successful.
    }).catch((error) => {
      const errorMessage = error;
      callback(false);
      // An error happened.
    });
}
