import { doc } from 'firebase/firestore';
import { logOutUser } from '../lib/account';
import {
  createEvent, bringEvent,
} from '../lib/events';

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
      };
      inputEvent.value = '';
      createEvent(data);
      const eventArea = document.querySelector('.event_area');
      eventArea.innerHTML = '';
      bringEvent();
    }
  });
  bringEvent().then((res) => {
    res.forEach((ev) => {
      console.log(ev.post);
      const postElement = document.createElement('p');
      postElement.textContent = ev.post;
      containerEvents.appendChild(postElement);
    });
  });

  //   const eventDataToUpdate = {
  //     name: 'Updated Event Name', description: 'Updated Description',
  //   };
  //   updateEvent('event_id_here', eventDataToUpdate);
  //   removeEvent('event_id_here');
  // });
  homeDiv.append(title);
  homeDiv.append(post, inputEvent, buttonShare);
  homeDiv.appendChild(containerEvents);
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
