import { titleBox2 } from './htmlElements';

export const Home = (navigateTo) => {
  const homeDiv = document.createElement('div');

  const welcome = document.createElement('p');
  welcome.innerHTML = 'Welcome';

  const greeting = document.createElement('p');
  greeting.innerHTML = 'Stay connected with musicians, events, posts and more.';

  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Sign Up';
  buttonLogin.textContent = 'Sign In';

  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  homeDiv.append(titleBox2());
  homeDiv.append(welcome, greeting);

  homeDiv.append(buttonRegister, buttonLogin);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  buttonContainer.append(buttonRegister);
  buttonContainer.append(buttonLogin);

  homeDiv.append(buttonContainer);
  return homeDiv;
};
