import { logOutUser } from '../lib/account';
import { updateProfileInfo } from '../lib/post';
import { bottomMenu2, titleBox2 } from './htmlElements';

export const Profile = (navigateTo) => {
  const homeDiv = document.createElement('div');

  // const displayNameInput = document.createElement('input');
  // displayNameInput.type = 'text';
  // displayNameInput.placeholder = 'Nuevo nombre de visualización';
  // const photoURLInput = document.createElement('input');
  // photoURLInput.type = 'text';
  // photoURLInput.placeholder = 'Nueva URL de la foto de perfil';
  // const saveChangesButton = document.createElement('button');
  // saveChangesButton.textContent = 'Guardar cambios';

  // saveChangesButton.addEventListener('click', () => {
  //   const newDisplayName = displayNameInput.value;
  //   const newPhotoURL = photoURLInput.value;
  //   updateProfileInfo(newDisplayName, newPhotoURL);
  // });

  function createInputs() {
    const labels = ['First Name', 'Last Name', 'Job', 'Age', 'Location', 'Phone'];
    const inputIds = ['firstName', 'lastName', 'job', 'age', 'location', 'phone'];
    const formContainer = document.createElement('div');
    for (let i = 0; i < labels.length; i++) {
      const label = document.createElement('label');
      label.innerHTML = `${labels[i]}: `;

      const input = document.createElement('input');
      input.type = 'text';

      input.id = inputIds[i];
      input.name = inputIds[i];

      formContainer.appendChild(input);
      formContainer.appendChild(label);
      formContainer.appendChild(document.createElement('br'));
    }
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit'
    submitButton.addEventListener('click', () => {
      let inputfirstName = document.querySelector('#firstName');
      let nametoFirebase = inputfirstName.value;
      let inputLastName = document.querySelector('#lastName');
      let lasttoFirebase = inputLastName.value;
      // for (let i = 0; i < inputIds.length; i++) {
      //   console.log(i);
      //   let inputField = document.querySelector('#{inputIds[i]}');
      //   profileData[0] = inputField.value;
      // }
      console.log(nametoFirebase);
      console.log(lasttoFirebase);
    });
    formContainer.appendChild(submitButton);
    return formContainer;
  }

  homeDiv.append(titleBox2());
  //homeDiv.append(displayNameInput, photoURLInput, saveChangesButton);
  homeDiv.append(createInputs());
  homeDiv.append(bottomMenu2(navigateTo, logOutUser));
  return homeDiv;
};
