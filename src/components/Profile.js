import { async } from 'regenerator-runtime';
import { logOutUser, getCurrentUser } from '../lib/account';
import { updateProfileInfo, creatNewUser } from '../lib/post';
import { bottomMenu2, titleBox2 } from './htmlElements';

export const Profile = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const user = getCurrentUser();

  const displayNameInput = document.createElement('input');
  displayNameInput.type = 'text';
  displayNameInput.placeholder = 'New display name';
  
  const photoURLInput = document.createElement('input');
  photoURLInput.type = 'text';
  photoURLInput.placeholder = 'New photo URL';
  
  const personalInfoInput = document.createElement('textarea');
  personalInfoInput.placeholder = 'Enter personal information...';
  
  const saveChangesButton = document.createElement('button');
  saveChangesButton.textContent = 'Save changes';
  saveChangesButton.addEventListener('click', async () => {
    const newDisplayName = displayNameInput.value;
    const newPhotoURL = photoURLInput.value;
    const newPersonalInfo = personalInfoInput.value;

    if (!user) {
      try {
        await creatNewUser(newDisplayName, '');
        const newUser = getCurrentUser();
        if (newUser) {
          await updateProfileInfo(newDisplayName, newPhotoURL);
          console.log('Usuario creado y perfil actualizado exitosamente');
        }
      } catch (error) {
        console.error('Error al crear el usuario o actualizar el perfil:', error);
      }
    } else {
      try {
        await updateProfileInfo(user, newDisplayName, newPhotoURL);
        console.log('Perfil actualizado exitosamente');
      } catch (error) {
        console.error('Error al actualizar el perfil:', error);
      }
    }
  });
  
  displayNameInput.value = user?.displayName || '';
  photoURLInput.value = user?.photoURL || '';

  homeDiv.append(titleBox2());
  homeDiv.append(displayNameInput, photoURLInput, personalInfoInput, saveChangesButton);
  homeDiv.append(bottomMenu2(navigateTo, logOutUser));
  return homeDiv;
};