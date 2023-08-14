import { logOutUser } from '../lib/account';
import postRender from './PostRender';
import { bottomMenu2, titleBox2 } from './htmlElements';

export const Start = (navigateTo) => {
  const homeDiv = document.createElement('div');

  const post = document.createElement('p');

  const containerPosts = document.createElement('div');
  containerPosts.classList.add('post-area');
  document.createElement('container', containerPosts);
  homeDiv.append(titleBox2());
  homeDiv.append(post);

  homeDiv.appendChild(containerPosts);
  homeDiv.appendChild(postRender());

  homeDiv.append(bottomMenu2(navigateTo, logOutUser));

  return homeDiv;
};
