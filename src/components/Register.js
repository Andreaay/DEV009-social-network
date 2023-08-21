/* eslint-disable no-alert */
/* eslint-disable no-console */
import { GoogleAuthProvider } from 'firebase/auth';
import { addUser, enterGoogle } from '../lib/account';
import { titleBox2 } from './htmlElements';

export const Register = (navigateTo) => {
  const homeDiv = document.createElement('div');

  const title = document.createElement('h3');

  const inputEmail = document.createElement('input');
  inputEmail.id = 'enterEmail';
  const note = document.createElement('p');
  note.innerHTML = 'Enter your email address';
  const loginError = document.createElement('h5');
  loginError.innerText = '';

  const inputPassword = document.createElement('input');
  inputPassword.id = 'enterPassword';
  inputPassword.type = 'password';
  const password = document.createElement('p');
  password.innerHTML = 'Enter your password';

  const buttonBack = document.createElement('button');

  const buttonGoogle = document.createElement('button');
  buttonGoogle.innerHTML = 'Continue with Google <i class="fa-brands fa-google"></i>';
  buttonGoogle.addEventListener('click', () => {
    enterGoogle()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        navigateTo('/start');
        const token = credential.accessToken;
        const { user } = result;
        return (user, token);
        // // IdP data available using getAdditionalUserInfo(result)
        // // ...
      })
      .catch((error) => {
        GoogleAuthProvider.credentialFromError(error);
        loginError.innerText = 'Invalid  Accound';
      });
  });

  const registerUser = document.createElement('button');
  registerUser.textContent = 'Sign Up';
  registerUser.addEventListener('click', () => {
    addUser(inputEmail.value, inputPassword.value)
      .then(() => {
        navigateTo('/start');
      })
      .catch(() => {
        loginError.innerText = 'Password or Email invalid';
      });
  });
  registerUser.setAttribute('id', 'buttonReg');
  title.textContent = 'Sign Up';
  buttonBack.textContent = 'Go back';
  inputEmail.placeholder = 'Email address';
  inputPassword.placeholder = 'Password';

  buttonBack.addEventListener('click', () => {
    navigateTo('/');
  });
  homeDiv.append(titleBox2());
  homeDiv.append(title, note, inputEmail, password, buttonGoogle);
  homeDiv.append(inputPassword, buttonBack, loginError);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  buttonContainer.append(registerUser);
  buttonContainer.append(buttonGoogle);
  buttonContainer.append(buttonBack);

  homeDiv.append(buttonContainer);

  return homeDiv;
};
