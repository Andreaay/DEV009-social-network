import { logOutUser } from '../lib/account';
import { createPost, bringPost } from '../lib/post';
import { bottomMenu2, titleBox2 } from './htmlElements';

export const Newpost = (navigateTo) => {
  const homeDiv = document.createElement('div');

  const subtitle = document.createElement('p');
  subtitle.innerHTML = 'What is happening?';
  const inputPost = document.createElement('input');
  inputPost.id = 'enterPost';
  const buttonShare = document.createElement('button');
  buttonShare.innerHTML = 'share <i class="fa-solid fa-share"></i>';

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
  const menuFromHTML = bottomMenu2(navigateTo,logOutUser)
  const titleFromHTML = titleBox2()
  homeDiv.append(titleFromHTML,subtitle, inputPost, buttonShare,menuFromHTML);
  return homeDiv;
}