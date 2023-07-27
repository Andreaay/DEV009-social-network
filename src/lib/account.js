/* eslint-disable import/no-duplicates */
/* eslint-disable max-len */
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';
import { auth } from './firebase';

// import { logOutUser } from "firebase/auth";//boton sign out
// persistencia de cuenta

export const addUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
/* export function signinUser(email, password, callback) {
  setPersistence('local', auth, browserSessionPersistence)
    .then(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential;
          console.log(user);
          callback(true);
          console.log(setPersistence);
        })
      /*   if (callback(true)) {
      .then(() => {
        signInWithEmailAndPassword(auth, email, password);
        callback(true);
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode);
          callback(false);
        });
    });
} */
export function signinUser(email, password, callback) {
  setPersistence('local', auth, browserSessionPersistence)
    .then((userCredential) => {
      const user = userCredential;
      callback(true);
      console.log(setPersistence, user);

      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      callback(false);
    });
}
/* const auth = getAuth();//
setPersistence(auth, setPersistence)
  .then(() => {
    const provider = new GoogleAuthProvider();
    // In memory persistence will be applied to the signed in Google user
    // even though the persistence was set to 'none' and a page redirect
    // occurred.
    return signInWithRedirect(auth, provider);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });  */ // presistencia con google

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

// persistencia de cuenta
/* export function persistenceUser(callback, email, password) {
  setPersistence(auth, browserSessionPersistence)
    .then(() =>{
      signInWithEmailAndPassword(auth, email, password);
      callback(true);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode)
      callback(false);
    });
} */
// persistencia con google
/* import { getAuth, setPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
setPersistence(auth, inMemoryPersistence)
  .then(() => {
    const provider = new GoogleAuthProvider();
    // In memory persistence will be applied to the signed in Google user
    // even though the persistence was set to 'none' and a page redirect
    // occurred.
    return signInWithRedirect(auth, provider);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
 */
