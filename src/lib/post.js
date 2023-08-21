//* eslint-disable eol-last */
/* eslint-disable import/no-duplicates */
import {
  getFirestore, collection, getDocs, addDoc, query, orderBy, doc, updateDoc, deleteDoc, setDoc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from './firebase';

export const auth = getAuth(app);
export const database = getFirestore(app);
export const q = query(collection(database, 'posts'), orderBy('created_date', 'desc'));

// NEW POST
export const createPost = async (data) => {
  try {
    const docRef = await addDoc(collection(database, 'posts'), data);

    // crear una subcollection en la bd para los likes, que cadda like tenga el userid
    // y un booleano que diga si el user id ya le dio click
    // en la creacion del post el booleano es falso
    const likeDocRef = doc(database, 'posts', docRef.id, 'like', data.userId); // no estoy segura si es like o likes
    await setDoc(likeDocRef, { liked: false });
  } catch (e) {
    console.error('Error adding post: ', e);
  }
};

export async function bringPost() {
  const everyPost = query(collection(database, 'posts'), orderBy('created_date', 'desc'));
  const documents = await getDocs(everyPost);
  return documents;
}

// UPDATE POST
export async function updatePost(postId, newData) {
  try {
    const postRef = doc(database, 'posts', postId);
    await updateDoc(postRef, newData);
  } catch (e) {
    console.error('Error updating post: ', e);
  }
}

// REMOVE POST
export async function removePost(postId) {
  const postRef = doc(database, 'posts', postId);
  await deleteDoc(postRef);
}
