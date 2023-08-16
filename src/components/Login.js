/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
import { GoogleAuthProvider } from 'firebase/auth';
import { enterGoogle, signinUser } from '../lib/account';
import { titleBox2 } from './htmlElements';

export const Login = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  const inputEmail = document.createElement('input');
  inputEmail.id = 'enterEmail';
  const note = document.createElement('p');
  note.innerHTML = 'Enter your email address';
  const inputPassword = document.createElement('input');
  const loginError = document.createElement('h5');
  loginError.innerText = '';
  inputPassword.id = 'enterPassword';
  inputPassword.type = 'password';
  const password = document.createElement('p');
  password.innerHTML = 'Enter your password';
  const button = document.createElement('button');
  button.addEventListener('click', () => {
    const alertSignUser = (callback) => {
      if (callback) {
        navigateTo('/start');
      } else {
        loginError.innerText = 'Password or Email invalid';
      }
    };
    signinUser(inputEmail.value, inputPassword.value, alertSignUser);
  });
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
        // // The signed-in user info.
        const { user } = result;
        return (user, token);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        const errorMessage = error.message;
        loginError.innerText = 'Invalid  Accound';
        return (credential, errorMessage);
      });
  }); title.textContent = 'Sign in';
  button.textContent = 'Sign In';
  buttonBack.textContent = 'Go back';
  inputEmail.placeholder = 'Email address';
  inputPassword.placeholder = 'Password';
  buttonBack.addEventListener('click', () => {
    navigateTo('/');
  });
  homeDiv.append(titleBox2())
  homeDiv.append(title, note, inputEmail, password, inputPassword, button, buttonGoogle);
  homeDiv.append(buttonBack, loginError);
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  buttonContainer.append(button);
  buttonContainer.append(buttonGoogle);
  buttonContainer.append(buttonBack);
  homeDiv.append(buttonContainer); return homeDiv;
};
