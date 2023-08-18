//* eslint-disable eol-last */
/* eslint-disable import/no-duplicates */
import {
  getFirestore, collection, getDocs, addDoc, query, orderBy, doc, updateDoc, deleteDoc, setDoc
  // incrementCounter
 } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { firebase } from 'firebase/app';
import { app } from './firebase.js';
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const {  FieldValue, Filter } = require('firebase-admin/firestore');
// initializeApp();
export const auth = getAuth(app);
export const database = getFirestore(app);
export const q = query(collection(database, 'posts'), orderBy('created_date', 'desc'));

// PROFILE

/* export const updateProfileInfo = (displayName, photoURL) => {
  const user = auth.currentUser;
  if (user) {
    return updateProfile(user, { displayName, photoURL })
      .then(() => {
      })
      .catch((error) =>
        // Ocurrió un error durante la actualización del perfil.
        Promise.reject(error));
  }
  console.error('No authenticated user.');
  return Promise.reject(new Error('No authenticated user.'));
}; */
// NEW POST
export const createPost = async (data) => {
  try {
    const docRef = await addDoc(collection(database, 'posts'), data);

    // crear una subcollection en la bd para los likes, que cadda like tenga el userid 
    //y un booleano que diga si el user id ya le dio click
    // en la creacion del post el booleano es falso
    const likeDocRef = doc(database, 'posts', docRef.id, 'like', data.userId); // no estoy segura si es like o likes
    await setDoc(likeDocRef, {liked:false});
    //
    console.log(data);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding post: ', e);
  }
};


export async function bringPost() {
  console.log('bring function');
  const everyPost = query(collection(database, 'posts'), orderBy('created_date', 'desc'));
  const documents = await getDocs(everyPost);
  return documents;
}

// UPDATE POST
export async function updatePost(postId, newData) {
  try {
    const postRef = doc(database, 'posts', postId);
    await updateDoc(postRef, newData);
    console.log('Post updated successfully');
  } catch (e) {
    console.error('Error updating post: ', e);
  }
}

// REMOVE POST
export async function removePost(postId) {
  const postRef = doc(database, 'posts', postId);
  await deleteDoc(postRef);
  console.log('Post removed successfully');
}
/* import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
}); */


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
