import {
  logOutUser, createProfile, getProfile, // getCurrentUser
} from '../lib/account';
import { bottomMenu2, titleBox2 } from './htmlElements';

export const Profile = (navigateTo) => {
  const homeDiv = document.createElement('div');

  function createInputs() {
    // create input for name
    const nameInput = document.createElement('input');
    nameInput.id = 'profilNameInput';
    nameInput.placeholder = 'Escribe tu nombre';
    // create input for URL
    const photoUrlInput = document.createElement('input');
    photoUrlInput.id = 'profilNameInput';
    photoUrlInput.placeholder = 'Pega la url de tu imagen';
    // create the button
    const updateProfileButton = document.createElement('button');
    updateProfileButton.innerHTML = 'Submit';
    // create the event listenr
    updateProfileButton.addEventListener('click', () => {
      createProfile(nameInput.value, photoUrlInput.value);
    });
    // create a container div
    const inputsDiv = document.createElement('div');
    inputsDiv.append(nameInput);
    inputsDiv.append(photoUrlInput);
    inputsDiv.append(updateProfileButton);
    return inputsDiv;
  }
  function showProfile() {
    const getProfileButton = document.createElement('button');
    getProfileButton.innerHTML = 'Show current Profile';
    const profilesDiv = document.createElement('div');
    const nameProfile = document.createElement('p');
    const photoProfile = document.createElement('img');
    // create the event listenr
    getProfileButton.addEventListener('click', () => {
      const dataFromProfile = (getProfile());
      console.log(dataFromProfile);
      nameProfile.textContent = `Welcome ${dataFromProfile[0]}`;
      photoProfile.src = dataFromProfile[2];
    });

    profilesDiv.append(getProfileButton);
    profilesDiv.append(nameProfile);
    profilesDiv.append(photoProfile);
    return profilesDiv;
  }
  homeDiv.append(titleBox2());
  homeDiv.append(createInputs());
  homeDiv.append(showProfile());
  homeDiv.append(bottomMenu2(navigateTo, logOutUser));

  return homeDiv;
};

/* funciones puras de direbase
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}

import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
}); */
