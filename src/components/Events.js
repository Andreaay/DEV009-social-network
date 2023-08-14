import {
  addDoc, doc, updateDoc, deleteDoc,
} from 'firebase/firestore';
import { logOutUser } from '../lib/account';
import { createEvent, bringEvent } from '../lib/events';
import eventRender from './EventRender';
import { bottomMenu2, titleBox2 } from './htmlElements';

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
  homeDiv.append(titleBox2());
  homeDiv.append(post, inputEvent, buttonShare);
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
        //likes:[],
        // aquí se puede id de usuario registrado
      };
      inputEvent.value = '';
      createEvent(data);
      const eventArea = document.querySelector('.event_area');
      eventArea.innerHTML = '';
    }
  });
  homeDiv.appendChild(containerEvents);
  homeDiv.appendChild(eventRender());
  homeDiv.append(bottomMenu2(navigateTo, logOutUser));

  return homeDiv;
}
