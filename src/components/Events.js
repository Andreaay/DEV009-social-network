import {
  addDoc, doc, updateDoc, deleteDoc,
} from 'firebase/firestore';
import { logOutUser } from '../lib/account';
import {
  createEvent, bringEvent, updateEvent, removeEvent,
} from '../lib/events';
import { database } from '../lib/post';

export const Events = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h1');
  const inputEvent = document.createElement('input');
  inputEvent.id = 'enterEvent';
  const post = document.createElement('p');
  post.innerHTML = 'What is the new event?';
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
  buttonStart.addEventListener('click', () => {
    navigateTo('/start');
  });
  buttonNewPost.addEventListener('click', () => {
    navigateTo('/newpost');
  });
  buttonProfile.addEventListener('click', () => {
    navigateTo('/profile');
  });
  const containerEvents = document.createElement('div');
  containerEvents.classList.add('event-area');
  document.createElement('container', containerEvents);
  bringEvent();
  buttonShare.addEventListener('click', () => {
    const valuePost = inputEvent.value;
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
        // aquí se puede id de usuario registrado
      };
      inputEvent.value = '';
      createEvent(data);
      const eventArea = document.querySelector('.event_area');
      eventArea.innerHTML = '';
      bringEvent();
    }
  });
  function refreshBringEvent() {
    bringEvent().then((res) => {
      containerEvents.innerHTML = '';
      res.forEach((ev) => {
        console.log(ev.data());
        const postElement = document.createElement('p');
        postElement.textContent = ev.data().post;
        containerEvents.appendChild(postElement);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', (event) => {
          event.preventDefault();
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

          const popup = createEditPopup(ev.data().post);

          const saveButton = popup.querySelector('.popup-save');
          saveButton.addEventListener('click', () => {
            const newPostContent = popup.querySelector('.popup-input').value;
            postElement.textContent = newPostContent;
            const newData = {
              post: newPostContent,
            };
            if (ev.id) {
              updateEvent(ev.id, newData);
            }
            popup.remove();
          });

          const cancelButton = popup.querySelector('.popup-cancel');
          cancelButton.addEventListener('click', () => {
            popup.remove();
          });

          containerEvents.appendChild(popup);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          console.log('click');
          if (ev.id) {
            removeEvent(ev.id);
            console.log(removeEvent(ev.id), ev.id);
          }
        });

        containerEvents.appendChild(editButton);
        containerEvents.appendChild(deleteButton);
      });
    });
  }
  refreshBringEvent();
  window.addEventListener('click', refreshBringEvent);

  homeDiv.append(title);
  homeDiv.append(post, inputEvent, buttonShare);
  homeDiv.appendChild(containerEvents);
  homeDiv.append(buttonStart, buttonEvents, buttonNewPost, buttonProfile, buttonLogout);

  const bottomMenuDiv = document.createElement('div');
  bottomMenuDiv.classList.add('bottom-menu');
  bottomMenuDiv.append(buttonStart, buttonEvents, buttonNewPost, buttonProfile, buttonLogout);
  homeDiv.append(bottomMenuDiv);
  return homeDiv;
};
