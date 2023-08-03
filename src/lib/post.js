// /* eslint-disable eol-last */
/* eslint-disable import/no-duplicates */
import { getFirestore, collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';
import { updateProfile, getAuth } from 'firebase/auth';
import { app } from './firebase.js';// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const {  FieldValue, Filter } = require('firebase-admin/firestore');// initializeApp();export const auth = getAuth(app);
export const database = getFirestore(app);
// PROFILE
export const updateProfileInfo = (displayName, photoURL) => {
  const user = auth.currentUser;
  if (user) {
    return updateProfile(user, { displayName, photoURL })
      .then(() => {
        console.log('Profile updated correctly');
      })
      .catch((error) => {
        // Ocurrió un error durante la actualización del perfil.
        console.error('Error updating profile:', error.message);
        return Promise.reject(error);
      });
  }
  console.error('No authenticated user.');
  return Promise.reject(new Error('No authenticated user.'));
};
// NEW POST
export const createPost = async (data) => {
  try {
    const docRef = await addDoc(collection(database, 'posts'), data);
    console.log(data);
    console.log('Document written with ID: ', docRef.id);
    // return createPost;
  } catch (e) {
    console.error('Error adding post: ', e);
  }
};export async function bringPost() {
  console.log('bring function');
  const everyPost = query(collection(database, 'posts'), orderBy('created_date', 'desc'));
  const documents = await getDocs(everyPost);
  return documents;
}/* getAuth()// crear perfil
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
  });getAuth()// borrar perfil
  .deleteUser(uid)
  .then(() => {
    console.log('Successfully deleted user');
  })
  .catch((error) => {
    console.log('Error deleting user:', error);
  });const listAllUsers = (nextPageToken) => { // ver todos los usuarios creados
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