import { logOutUser } from '../lib/account';
import { updateProfileInfo } from '../lib/post';

export const Profile = (navigateTo) => {
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
  buttonEvents.addEventListener('click', () => {
    navigateTo('/events');
  });
  buttonNewPost.addEventListener('click', () => {
    navigateTo('/newpost');
  });

  const displayNameInput = document.createElement('input');
  displayNameInput.type = 'text';
  displayNameInput.placeholder = 'Nuevo nombre de visualización';

  const photoURLInput = document.createElement('input');
  photoURLInput.type = 'text';
  photoURLInput.placeholder = 'Nueva URL de la foto de perfil';

  const saveChangesButton = document.createElement('button');
  saveChangesButton.textContent = 'Guardar cambios';
  saveChangesButton.addEventListener('click', () => {
    const newDisplayName = displayNameInput.value;
    const newPhotoURL = photoURLInput.value;
    updateProfileInfo(newDisplayName, newPhotoURL);
  });

  homeDiv.append(title);
  homeDiv.append(displayNameInput);
  homeDiv.append(photoURLInput);
  homeDiv.append(saveChangesButton);
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
