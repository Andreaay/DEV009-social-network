import { getCurrentUser, logOutUser } from '../lib/account';

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
