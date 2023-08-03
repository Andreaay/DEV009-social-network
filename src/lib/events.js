// /* eslint-disable eol-last */
/* eslint-disable import/no-duplicates */
import { getFirestore, collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from './firebase.js';

// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const {  FieldValue, Filter } = require('firebase-admin/firestore');

// initializeApp();.

export const auth = getAuth(app);
export const database = getFirestore(app);
// EVENTS
export const createEvent = async (data) => {
  try {
    const docRef = await addDoc(collection(database, 'events'), data);
    console.log(data);
    console.log('Document written with ID: ', docRef.id);
    // return createPost;
  } catch (e) {
    console.error('Error adding event: ', e);
  }
};

export async function bringEvent() {
  console.log('bring function');
  const everyPost = query(collection(database, 'events'), orderBy('created_date', 'desc'));
  const documents = await getDocs(everyPost);
  return documents.docs.map((doc) => doc.data());
}
