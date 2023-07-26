import { logOutUser } from '../lib/account';

export const Start = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h1');
  const buttonStart = document.createElement('button');
  const buttonEvents = document.createElement('button');
  const buttonNewPost = document.createElement('button');
  const buttonProfile = document.createElement('button');
  const loginError = document.createElement('h5');
  loginError.innerText = '';
  const buttonLogout = document.createElement('button');
  buttonLogout.addEventListener('click', () => {
    const alertOutUser = (callback) => {
      if (callback) {
        navigateTo('/');
        console.log(alertOutUser);
      }
    };
    logOutUser(alertOutUser);
  });

  buttonStart.textContent = 'Home';
  buttonEvents.textContent = 'Events';
  buttonNewPost.textContent = 'New Post';
  buttonProfile.textContent = 'Profile';
  buttonLogout.textContent = 'Log Out';
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
