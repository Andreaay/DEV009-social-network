/* eslint-disable import/no-duplicates */
/* eslint-disable max-len */
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';
import { auth } from './post.js';

// const db = getFirestore(app);
export const addUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
// export updateDisplayName user.updateProfile({
//   displayName: "Jane Q. User",
//   photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Update successful
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });

export function signinUser(email, password, callback) {
  setPersistence(auth, browserSessionPersistence)
    .then(() => signInWithEmailAndPassword(auth, email, password))
    .then((userCredential) => {
      const { user } = userCredential;
      console.log(user);
      callback(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
      callback(false);
    });
}

export const provider = new GoogleAuthProvider();
export const enterGoogle = () => signInWithPopup(auth, provider); // boton sign out
export function logOutUser(callback) {
  signOut(auth)
    .then(() => {
      callback(true);
      // Sign-out successful.
    }).catch((error) => {
      const errorMessage = error;
      callback(false);
      console.log(errorMessage);
      // An error happened.
    });
}// persistencia con google
/* import { getAuth, setPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider } from "firebase/auth";const auth = getAuth();
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
export const getCurrentUser = () => {
  const user = getAuth().currentUser;
  return user;
};
