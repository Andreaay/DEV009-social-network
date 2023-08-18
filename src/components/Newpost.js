import { logOutUser, getCurrentUser } from '../lib/account';
import { createPost, bringPost } from '../lib/post';

import { bottomMenu2, titleBox2 } from './htmlElements';

export const Newpost = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const inputPost = document.createElement('textarea');
  inputPost.id = 'enterPost';
  inputPost.placeholder = 'Please write your post here'
  const subtitle = document.createElement('p');
  subtitle.innerHTML = 'What is happening?';
  const postsArea = document.createElement('p');
  const buttonShare = document.createElement('button');
  buttonShare.innerHTML = 'share <i class="fa-solid fa-share"></i>';
  buttonShare.setAttribute('id', 'paltesting')
  const likedPostsNew = {};

  homeDiv.append(titleBox2());
  homeDiv.append(subtitle, inputPost, buttonShare);
  homeDiv.append(postsArea)
  bringPost();

  buttonShare.addEventListener('click', () => {
    const valuePost = inputPost.value;
    if (valuePost.length === 0) {
      postsArea.innerHTML = 'Please fill this field'
    } else {
      
      const data = {
        user: getCurrentUser().displayName,//usuario logeado
        // last: "Martínez",
        created_date: new Date(),
        post: valuePost,
        // shard: 'shard_id',
        like: 0,
        likeUser: [],
        // aquí se puede id de usuario registrado
      };
      inputPost.value = '';
      createPost(data);
      likedPostsNew[data.user + data.created_date] = false;
      postsArea.innerHTML = 'The post was created correctly: "' + data.post +'" by ' + data.user;
      
    }
  });

  homeDiv.append(bottomMenu2(navigateTo, logOutUser));
  return homeDiv;
};
