/* eslint-disable import/no-duplicates */
/* eslint-disable max-len */
<<<<<<< HEAD

=======
>>>>>>> b3197a96c575dc0a4ffa557c96456cc972dc41b0
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';

export const addUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export function signinUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export const provider = new GoogleAuthProvider();
export const enterGoogle = () => signInWithPopup(auth, provider);
