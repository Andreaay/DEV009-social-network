import { logOutUser } from '../lib/account';
import { updateProfileInfo } from '../lib/post';
import { bottomMenu2, titleBox2 } from './htmlElements';
export const Profile = (navigateTo) => {
  const homeDiv = document.createElement('div');

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

  homeDiv.append(titleBox2())
  homeDiv.append(displayNameInput, photoURLInput, saveChangesButton);
  homeDiv.append(bottomMenu2(navigateTo,logOutUser))
  return homeDiv;
};