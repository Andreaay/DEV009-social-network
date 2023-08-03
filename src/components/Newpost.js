import { doc } from 'firebase/firestore';
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
  buttonShare.innerHTML = 'share <i class="fa-solid fa-share"></i>';
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

  const containerPosts = document.createElement('div');
  containerPosts.classList.add('post-area');
  document.createElement('container', containerPosts);
  bringPost();

  buttonShare.addEventListener('click', () => {
    const valuePost = inputPost.value;
    if (valuePost.length === 0) {
      alert('Can not post empty value');
    } else {
      const data = {
        // user: "Maria",
        // last: "Martínez",
        created_date: new Date(),
        // edited_date:"",
        post: valuePost,
        // likes:"",
      };
      inputPost.value = '';
      createPost(data);
      const postsArea = document.querySelector('.posts_area');
      postsArea.innerHTML = '';
      bringPost();
    }
  });

  bringPost().then((res) => {
    res.forEach((doc) => {
      const p = doc.data();
      console.log(p.post);
      const postElement = document.createElement('p');
      postElement.textContent = p.post;
      containerPosts.appendChild(postElement);
    });
  });

  homeDiv.append(title);
  homeDiv.append(post, inputPost, buttonShare, buttonStart, buttonEvents);
  homeDiv.append(buttonNewPost, buttonProfile, buttonLogout);
  homeDiv.appendChild(containerPosts);
  const bottomMenuDiv = document.createElement('div');
  bottomMenuDiv.classList.add('bottom-menu');
  homeDiv.append(bottomMenuDiv);
  bottomMenuDiv.append(buttonStart);
  bottomMenuDiv.append(buttonEvents);
  bottomMenuDiv.append(buttonNewPost);
  bottomMenuDiv.append(buttonProfile);
  bottomMenuDiv.append(buttonLogout);
  return homeDiv;
};/* const inputPost = document.createElement('input');
  inputPost.classList.add=('input-post');
  export const newPost = document.querySelector('.input-post');
  newPost.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submitted');
  const newPost= newPost['input-post']

  console.log (inputPost)
  });

 */
