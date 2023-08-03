// /* eslint-disable eol-last */
/* eslint-disable import/no-duplicates */
import {
  getFirestore, collection, getDocs, addDoc, query, orderBy,
} from 'firebase/firestore';
// import {
//   doc, updateDoc, arrayUnion, arrayRemove,
// } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from './firebase.js';

export const auth = getAuth(app);
export const database = getFirestore(app);
// EVENTS
export const createEvent = async (data) => {
  try {
    const docRef = await addDoc(collection(database, 'events'), data);
    console.log(data);
    console.log('Document written with ID: ', docRef.id);
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

// // UPDATE EVENT
// export async function updateEvent(eventId, newData) {
//   try {
//     const eventRef = doc(database, 'events', eventId);
//     await updateDoc(eventRef, newData);
//     console.log('Event updated successfully');
//   } catch (e) {
//     console.error('Error updating event: ', e);
//   }
// }

// // REMOVE EVENT
// export async function removeEvent(eventId) {
//   try {
//     const eventRef = doc(database, 'events', eventId);
//     await deleteDoc(eventRef);
//     console.log('Event removed successfully');
//   } catch (e) {
//     console.error('Error removing event: ', e);
//   }
// }
