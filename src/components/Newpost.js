import { logOutUser, getCurrentUser } from '../lib/account';
import { createPost, bringPost } from '../lib/post';

import { bottomMenu2, titleBox2 } from './htmlElements';

export const Newpost = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const inputPost = document.createElement('input');
  inputPost.id = 'enterPost';
  const subtitle = document.createElement('p');
  subtitle.innerHTML = 'What is happening?';
  const postsArea = document.createElement('p');
  const buttonShare = document.createElement('button');
  buttonShare.innerHTML = 'share <i class="fa-solid fa-share"></i>';
  buttonShare.setAttribute('id', 'paltesting')

  const errorMessage = document.createElement('p');
  errorMessage.style.display = 'none';
  errorMessage.style.color = 'red';
  errorMessage.textContent = 'Can not post empty value';

  homeDiv.append(titleBox2());
  homeDiv.append(subtitle, inputPost, buttonShare);
  homeDiv.append(postsArea)
  bringPost();

  buttonShare.addEventListener('click', () => {
    const valuePost = inputPost.value;
    if (valuePost.length === 0) {
      errorMessage.style.display = 'block'; 
    } else {
      
      const data = {
        user: getCurrentUser().displayName,//usuario logeado
        // last: "Martínez",
        created_date: new Date(),
        post: valuePost,
        // shard: 'shard_id',
        like: 0,
        // aquí se puede id de usuario registrado
      };
      inputPost.value = '';
      createPost(data);
      postsArea.innerHTML = 'The post was created correctly: "' + data.post +'" by ' + data.user;
      
    }
  });

  homeDiv.append(bottomMenu2(navigateTo, logOutUser));
  return homeDiv;
};
