import { logOutUser } from '../lib/account';
import { bringPost, updatePost, removePost } from '../lib/post';

export const Start = (navigateTo) => {
  // console.log('start', getCurrentUser());
  const homeDiv = document.createElement('div');
  const title = document.createElement('h1');
  const buttonStart = document.createElement('button');
  buttonStart.innerHTML = '<i class="fas fa-house"></i>';
  const buttonEvents = document.createElement('button');
  buttonEvents.innerHTML = '<i class="fas fa-users"></i>';
  const buttonNewPost = document.createElement('button');
  buttonNewPost.innerHTML = '<i class="fas fa-plus"></i>';
  const buttonProfile = document.createElement('button');
  buttonProfile.innerHTML = '<i class="fas fa-user"></i>';
  const loginError = document.createElement('h5');
  loginError.innerText = '';
  const buttonLogout = document.createElement('button');
  buttonLogout.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>';
  const containerPosts = document.createElement('div');
  containerPosts.classList.add('post-area');
  document.createElement('container', containerPosts);

  buttonLogout.addEventListener('click', () => {
    const alertOutUser = (callback) => {
      if (callback) {
        navigateTo('/');
        console.log(alertOutUser);
      }
    };
    logOutUser(alertOutUser);
  });
  buttonLogout.setAttribute('id', 'botoncito');
  title.textContent = 'Expressio Music';

  bringPost().then((res) => {
    res.forEach((doc) => {
      const p = doc.data();
      console.log('prueba x');
      console.log(p.post);
      const postElement = document.createElement('p');
      postElement.textContent = p.post;
      containerPosts.appendChild(postElement);

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
        function createEditPopup(initialValue) {
          const popup = document.createElement('div');
          popup.classList.add('popup');

          const input = document.createElement('input');
          input.classList.add('popup-input');
          input.value = initialValue;

          const saveButton = document.createElement('button');
          saveButton.classList.add('popup-save');
          saveButton.textContent = 'Save';

          const cancelButton = document.createElement('button');
          cancelButton.classList.add('popup-cancel');
          cancelButton.textContent = 'Cancel';

          popup.appendChild(input);
          popup.appendChild(saveButton);
          popup.appendChild(cancelButton);

          return popup;
        }

        const popup = createEditPopup(p.post);

        const saveButton = popup.querySelector('.popup-save');
        saveButton.addEventListener('click', () => {
          const newPostContent = popup.querySelector('.popup-input').value;
          postElement.textContent = newPostContent;
          const newData = {
            post: newPostContent,
          };
          if (p.id) {
            updatePost(p.id, newData);
          }
          popup.remove();
        });

        const cancelButton = popup.querySelector('.popup-cancel');
        cancelButton.addEventListener('click', () => {
          popup.remove();
        });
        containerPosts.appendChild(popup);
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        console.log('click');
        if (doc.id) {
          removePost(doc.id);
          console.log(removePost(doc.id), doc.id);
        }
      });

      containerPosts.appendChild(editButton);
      containerPosts.appendChild(deleteButton);
    });
  });
  buttonEvents.addEventListener('click', () => {
    navigateTo('/events');
  });
  buttonNewPost.addEventListener('click', () => {
    navigateTo('/newpost');
  });
  buttonProfile.addEventListener('click', () => {
    navigateTo('/profile');
  });

  homeDiv.append(title);

  homeDiv.appendChild(containerPosts);

  homeDiv.append(buttonStart);
  homeDiv.append(buttonEvents);
  homeDiv.append(buttonNewPost);
  homeDiv.append(buttonProfile);
  homeDiv.append(buttonLogout);

  const bottomMenuDiv = document.createElement('div');
  bottomMenuDiv.classList.add('bottom-menu');

  bottomMenuDiv.append(buttonStart);
  bottomMenuDiv.append(buttonEvents);
  bottomMenuDiv.append(buttonNewPost);
  bottomMenuDiv.append(buttonProfile);
  bottomMenuDiv.append(buttonLogout);

  homeDiv.append(bottomMenuDiv);

  return homeDiv;
};
