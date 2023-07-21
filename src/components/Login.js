import { GoogleAuthProvider } from 'firebase/auth';
import { signinUser, enterGoogle } from '../lib/account';

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
  console.log(loginError);
  inputPassword.id = 'enterPassword';
  const password = document.createElement('p');
  password.innerHTML = 'Enter your password';
  const button = document.createElement('button');

  button.addEventListener('click', () => {
    signinUser(inputEmail.value, inputPassword.value)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        alert('Se logró', user);
        navigateTo('/start');
      })
      .catch((error) => { // const errorCode = error.code;
        const errorMessage = error.message;
        loginError.innerText = 'Password or Email invalid';
        console.log(errorMessage);
      });
  });

  const buttonBack = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Continue with Google';
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
        console.log(errorMessage + credential);
      });
  });

  title.textContent = 'Sign in';
  button.textContent = 'Sign In';

  buttonBack.textContent = 'Go back';

  inputEmail.placeholder = 'Email address';
  inputPassword.placeholder = 'Password';

  buttonBack.addEventListener('click', () => {
    navigateTo('/');
  });

  homeDiv.append(title, note, inputEmail, password, inputPassword, button, buttonGoogle);
  homeDiv.append(buttonBack, loginError);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  buttonContainer.append(button);
  buttonContainer.append(buttonGoogle);
  buttonContainer.append(buttonBack);

  homeDiv.append(buttonContainer);

  return homeDiv;
};
