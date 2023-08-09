import { logOutUser } from '../lib/account';
import {
  createEvent, bringEvent,
} from '../lib/events';
import eventRender from './EventRender';
import { bottomMenu2, titleBox2 } from './htmlElements';

export const Events = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const inputEvent = document.createElement('input');
  inputEvent.id = 'enterEvent';
  const post = document.createElement('p');
  post.innerHTML = 'What is the new event?';
  const buttonShare = document.createElement('button');
  buttonShare.innerHTML = 'share <i class="fa-solid fa-share"></i>';

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

    });
  }
  refreshBringEvent();
  window.addEventListener('click', refreshBringEvent);

  homeDiv.append(titleBox2());
  homeDiv.appendChild(eventRender());
  homeDiv.append(post, inputEvent, buttonShare);
  homeDiv.append(bottomMenu2(navigateTo, logOutUser));
  return homeDiv;
};
