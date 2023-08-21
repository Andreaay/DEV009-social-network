// import { getProfile } from '../lib/account';
export function titleBox2() {
  const title = document.createElement('h1');
  title.textContent = 'Expressio Music';
  const textTitleContainer = document.createElement('div');
  textTitleContainer.classList.add('title-container');
  textTitleContainer.append(title);
  // cosas del toggle de color

  const buttonTogleColors = document.createElement('button');
  buttonTogleColors.innerHTML = '<i class="fa-solid fa-toggle-on menu-toggle-button"></i>';
  const toggleMenu = () => {
    const currentPrimaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    console.log(currentPrimaryColor);
    if (currentPrimaryColor === 'rgb(30, 32, 35)') {
      document.documentElement.style.setProperty('--primary-color', 'rgb(255, 255, 255)');
      document.documentElement.style.setProperty('--primary-accent', 'rgb(190, 90, 90');
      document.documentElement.style.setProperty('--secondary-color', 'rgb(#BB3F3F)');
      document.documentElement.style.setProperty('--secondary-accent', 'rgb(242, 232, 237)');
      document.documentElement.style.setProperty('--cardsColor', 'rgb(255, 255, 255)');
    } else {
      document.documentElement.style.setProperty('--primary-color', 'rgb(30, 32, 35)'); // si cambias este color encesitas cambiar el del if
      document.documentElement.style.setProperty('--primary-accent', 'rgb(106, 20, 40)');
      document.documentElement.style.setProperty('--secondary-color', 'rgb(242, 232, 237)');
      document.documentElement.style.setProperty('--secondary-accent', 'rgb(212, 121, 121)');
      document.documentElement.style.setProperty('--cardsColor', 'rgb(145, 52, 52)');
    // 145, 52, 52
    }
  };
  /*  const dataFromProfile = (getProfile());
      // console.log(dataFromProfile);
      nameProfile.textContent = `Welcome ${dataFromProfile[0]}`; */
  buttonTogleColors.addEventListener('click', toggleMenu);
  textTitleContainer.append(buttonTogleColors);
  return textTitleContainer;
}

export function bottomMenu2(navigateTo, logOutUser) {
  const buttonNewPost = document.createElement('button');
  buttonNewPost.innerHTML = '<i class="fas fa-plus"></i>';
  const buttonStart = document.createElement('button');
  buttonStart.innerHTML = '<i class="fas fa-house"></i>';
  const buttonEvents = document.createElement('button');
  buttonEvents.innerHTML = '<i class="fas fa-users"></i>';
  const buttonProfile = document.createElement('button');
  buttonProfile.innerHTML = '<i class="fas fa-user"></i>';
  const buttonLogout2 = document.createElement('button');
  buttonLogout2.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>';
  buttonLogout2.id = 'botoncito2';
  buttonLogout2.addEventListener('click', () => {
    const alertOutUser = (callback) => {
      if (callback) {
        navigateTo('/');
      }
    };
    logOutUser(alertOutUser);
  });
  buttonStart.addEventListener('click', () => {
    navigateTo('/start');
  });
  buttonEvents.addEventListener('click', () => {
    navigateTo('/events');
  });
  buttonProfile.addEventListener('click', () => {
    navigateTo('/profile');
  });
  buttonNewPost.addEventListener('click', () => {
    navigateTo('/newpost');
  });
  const bottomMenuDiv = document.createElement('div');

  bottomMenuDiv.classList.add('bottom-menu');
  bottomMenuDiv.append(buttonStart, buttonEvents, buttonNewPost, buttonProfile, buttonLogout2);
  return bottomMenuDiv;
}
