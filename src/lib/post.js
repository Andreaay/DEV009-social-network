/* eslint-disable eol-last */
/* eslint-disable import/no-duplicates */
import { getFirestore } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { addDoc, Timestamp, database } from 'firebase/firestore';
import { auth } from './firebase';

// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const {  FieldValue, Filter } = require('firebase-admin/firestore');

// initializeApp();

/* export const db = getFirestore();

export const updateProfileInfo = (displayName, photoURL) => {
  const user = auth.currentUser;
  if (user) {
    return updateProfile(user, { displayName, photoURL })
      .then(() => {
        console.log('Perfil actualizado correctamente.');
      })
      .catch((error) => {
        // Ocurrió un error durante la actualización del perfil.
        console.error('Error al actualizar el perfil:', error.message);
        return Promise.reject(error);
      });
  }
  console.error('No hay un usuario autenticado.');
  return Promise.reject(new Error('No hay un usuario autenticado.'));
}; */

export async function createPost(database, inputPost, callback) {
  const content = inputPost.value;
  console.log(content);
  console.log(database);
  const docRef = await addDoc(collection(database, 'posts'), {
    postContent: content,
    author: 'Amalia',
    postTime: Timestamp.now(),
  });
  console.log('Document written with ID: ', docRef.id);
  callback(true);
}

import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

/* getAuth()// crear perfil
  .createUser({
    email: 'user@example.com',
    emailVerified: false,
    phoneNumber: '+11234567890',
    password: 'secretPassword',
    displayName: 'John Doe',
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });

getAuth()// borrar perfil
  .deleteUser(uid)
  .then(() => {
    console.log('Successfully deleted user');
  })
  .catch((error) => {
    console.log('Error deleting user:', error);
  });

const listAllUsers = (nextPageToken) => { // ver todos los usuarios creados
  // List batch of users, 1000 at a time.
  getAuth()
    .listUsers(1000, nextPageToken)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((userRecord) => {
        console.log('user', userRecord.toJSON());
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken);
      }
    })
    .catch((error) => {
      console.log('Error listing users:', error);
    });
};
  // Start listing users from the beginning, 1000 at a time.
listAllUsers(); */
