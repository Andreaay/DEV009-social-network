import { logOutUser } from '../lib/account';
import postRender from './PostRender';
import { bottomMenu2, titleBox2 } from './htmlElements';
export const Start = (navigateTo) => {
  const buttonLogout = document.createElement('button');
  buttonLogout.setAttribute('id', 'botoncito');
  buttonLogout.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>';
  buttonLogout.addEventListener('click', () => {
    const alertOutUser = (callback) => {
      if (callback) {
        navigateTo('/');
      }
    };
    logOutUser(alertOutUser);
  });
  const homeDiv = document.createElement('div');
  const post = document.createElement('p');
  const containerPosts = document.createElement('div');
  containerPosts.classList.add('post-area');
  document.createElement('container', containerPosts);
  homeDiv.append(titleBox2());
  homeDiv.append(post);
  homeDiv.appendChild(containerPosts);
  homeDiv.appendChild(postRender());
  homeDiv.append(bottomMenu2(navigateTo));
  homeDiv.append(buttonLogout);
  return homeDiv;
};
