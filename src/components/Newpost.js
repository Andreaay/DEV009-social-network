import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { logOutUser } from '../lib/account';
import { database } from '../lib/firebase';

export const Newpost = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h1');
  const inputPost = document.createElement('input');
  inputPost.id = 'enterPost';
  const post = document.createElement('p');
  post.innerHTML = 'What is happening?';
  const buttonShare = document.createElement('button');
  const buttonStart = document.createElement('button');
  const buttonEvents = document.createElement('button');
  const buttonNewPost = document.createElement('button');
  const buttonProfile = document.createElement('button');
  const buttonLogout = document.createElement('button');
  buttonLogout.addEventListener('click', () => {
    const alertOutUser = (callback) => {
      if (callback) {
        navigateTo('/');
        console.log(alertOutUser);
      }
    };
    logOutUser(alertOutUser);
  });

  buttonStart.textContent = 'Home';
  buttonShare.textContent = 'Share';
  buttonEvents.textContent = 'Events';
  buttonNewPost.textContent = 'New Post';
  buttonProfile.textContent = 'Profile';
  buttonLogout.textContent = 'Log Out';
  title.textContent = 'Expressio Music';

  buttonStart.addEventListener('click', () => {
    navigateTo('/start');
  });
  buttonEvents.addEventListener('click', () => {
    navigateTo('/events');
  });
  buttonProfile.addEventListener('click', () => {
    navigateTo('/profile');
  });

  buttonShare.addEventListener('click', async () => {
    const content = inputPost.value;
    console.log(content);
    console.log(database);
    const docRef = await addDoc(collection(database, 'posts'), {
      postContent: content,
      author: 'Amalia',
      postTime: Timestamp.now(),
    });
    console.log('Document written with ID: ', docRef.id);
  });

  homeDiv.append(title);
  homeDiv.append(post, inputPost, buttonShare, buttonStart, buttonEvents);
  homeDiv.append(buttonNewPost, buttonProfile, buttonLogout);
  const bottomMenuDiv = document.createElement('div');
  bottomMenuDiv.classList.add('bottom-menu');
  homeDiv.append(bottomMenuDiv);
  bottomMenuDiv.append(buttonStart);
  bottomMenuDiv.append(buttonEvents);
  bottomMenuDiv.append(buttonNewPost);
  bottomMenuDiv.append(buttonProfile);
  bottomMenuDiv.append(buttonLogout);

  return homeDiv;
};

/* const inputPost = document.createElement('input');
  inputPost.classList.add=('input-post');
  export const newPost = document.querySelector('.input-post');
  newPost.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submitted');
  const newPost= newPost['input-post']

  console.log (inputPost)
  });

 */
