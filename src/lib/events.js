// /* eslint-disable eol-last */
/* eslint-disable import/no-duplicates */
import {
  getFirestore, collection, getDocs, addDoc, query, orderBy, doc, updateDoc, deleteDoc,
} from 'firebase/firestore';
// import {
//   doc, updateDoc, arrayUnion, arrayRemove,
// } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from './firebase.js';

export const auth = getAuth(app);
export const database = getFirestore(app);
export const q = query(collection(database, 'events'), orderBy('created_date', 'desc'));

// EVENTS
export const createEvent = async (data) => {
  try {
    const docRef = await addDoc(collection(database, 'events'), data);
  } catch (e) {
  }
};

export async function bringEvent() {
  const everyPost = query(collection(database, 'events'), orderBy('created_date', 'desc'));
  const documents = await getDocs(everyPost);
  return documents;
}

// UPDATE EVENT
export async function updateEvent(eventId, newData) {
  try {
    const eventRef = doc(database, 'events', eventId);
    await updateDoc(eventRef, newData);
  } catch (e) {
  }
}

// REMOVE EVENT
export async function removeEvent(eventId) {
  const eventRef = doc(database, 'events', eventId);
  await deleteDoc(eventRef);
}
