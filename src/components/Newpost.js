import { doc } from 'firebase/firestore';
import { logOutUser } from '../lib/account';
import { createPost, bringPost } from '../lib/post';

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
  buttonStart.innerHTML = '<i class="fas fa-house"></i>';
  const buttonEvents = document.createElement('button');
  buttonEvents.innerHTML = '<i class="fas fa-users"></i>';
  const buttonNewPost = document.createElement('button');
  buttonNewPost.innerHTML = '<i class="fas fa-plus"></i>';
  const buttonProfile = document.createElement('button');
  buttonProfile.innerHTML = '<i class="fas fa-user"></i>';
  const buttonLogout = document.createElement('button');
  buttonLogout.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>';
  buttonLogout.addEventListener('click', () => {
    const alertOutUser = (callback) => {
      if (callback) {
        navigateTo('/');
        console.log(alertOutUser);
      }
    };
    logOutUser(alertOutUser);
  });
  title.textContent = 'Expressio Music';
  const textTitleContainer = document.createElement('div');
  textTitleContainer.classList.add('title-container');
  textTitleContainer.append(title); buttonStart.addEventListener('click', () => {
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
    }
  });

  bringPost().then((res) => {
    const lastPost = res.snapshot.docChanges[0].doc.data.value.mapValue.fields.post.stringValue;
    console.log(postDate);
    const successMessage = document.createElement('p');
    successMessage.textContent = 'The post was created correctly : ';
    const postElement = document.createElement('p');
    postElement.textContent = lastPost;
    containerPosts.appendChild(successMessage);
    containerPosts.appendChild(postElement);
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
};
