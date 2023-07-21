/* eslint-disable import/no-duplicates */
/* eslint-disable max-len */

// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth } from 'firebase/auth';


export const addUser = (email, password) => createUserWithEmailAndPassword(getAuth, email, password);
export function signinUser(email, password) {
  return signInWithEmailAndPassword(getAuth, email, password);
}

export const provider = new GoogleAuthProvider();
export const enterGoogle = () => signInWithPopup(getAuth, provider);
