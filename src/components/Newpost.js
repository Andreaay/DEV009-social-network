import { logOutUser } from '../lib/account';
import { createPost, bringPost } from '../lib/post';

import { bottomMenu2, titleBox2 } from './htmlElements';

export const Newpost = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const inputPost = document.createElement('input');
  inputPost.id = 'enterPost';
  const subtitle = document.createElement('p');
  subtitle.innerHTML = 'What is happening?';

  const buttonShare = document.createElement('button');
  buttonShare.innerHTML = 'share <i class="fa-solid fa-share"></i>';

  /*  const containerPosts = document.createElement('div');
  containerPosts.classList.add('post-area');
  document.createElement('container', containerPosts); */
  homeDiv.append(titleBox2());
  homeDiv.append(subtitle, inputPost, buttonShare);
  bringPost();

  buttonShare.addEventListener('click', () => {
    const valuePost = inputPost.value;
    if (valuePost.length === 0) {
      alert('Can not post empty value');
    } else {
      const data = {
        // agrgar username  y likes
        created_date: new Date(),
        post: valuePost,
      };
      inputPost.value = '';
      createPost(data);
      const postsArea = document.querySelector('.posts_area');
      postsArea.innerHTML = '';
    }
  });
  // -------------------->>>>> Page creation
  // homeDiv.appendChild(containerPosts);

  homeDiv.append(bottomMenu2(navigateTo, logOutUser));

  return homeDiv;
};
