import {
  addDoc, doc, updateDoc, deleteDoc,
} from 'firebase/firestore';
import { logOutUser } from '../lib/account';
import { createEvent, bringEvent } from '../lib/events';
import eventRender from './EventRender';
import { bottomMenu2, titleBox2 } from './htmlElements';

export const Events = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const eventInstructions = document.createElement('div');
  eventInstructions.classList = 'event-instruction';
  const inputEvent = document.createElement('textarea');
  inputEvent.id = 'enterEvent';
  inputEvent.placeholder = 'Please write your event here.'
  const post = document.createElement('p');
  post.innerHTML = 'What is the new event?';
  const messageError = document.createElement('p');
  messageError.innerHTML = '';
  // div de eventos
  const buttonShare = document.createElement('button');
  buttonShare.innerHTML = 'share <i class="fa-solid fa-share"></i>';

  buttonShare.addEventListener('click', () => {
    const valuePost = inputEvent.value;
    if (valuePost.length === 0) {
      messageError.innerHTML = 'Please fill this field'
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
      createEvent(data);
      inputEvent.innerHTML = '';
    }
  });

  bringEvent(); // funcion de la suerte favor de no borrar
  homeDiv.append(titleBox2());
  eventInstructions.append(post, inputEvent, buttonShare,messageError);
  homeDiv.appendChild(eventInstructions);
  homeDiv.appendChild(eventRender()); // este div tiene la clase 'tiemporeal' para css
  homeDiv.append(bottomMenu2(navigateTo, logOutUser));
  return homeDiv;
}
