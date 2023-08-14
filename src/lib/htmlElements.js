export function bottomMenu2() {
  const buttonNewPost = document.createElement('button');
  buttonNewPost.innerHTML = '<i class="fas fa-plus"></i>';
  const buttonStart = document.createElement('button');
  buttonStart.innerHTML = '<i class="fas fa-house"></i>';
  const buttonEvents = document.createElement('button');
  buttonEvents.innerHTML = '<i class="fas fa-users"></i>';
  const buttonProfile = document.createElement('button');
  buttonProfile.innerHTML = '<i class="fas fa-user"></i>';
  const buttonLogout = document.createElement('button');
  buttonLogout.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>';
  buttonLogout.addEventListener('click', () => {
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
  const bottomMenuDiv = document.createElement('div');
  bottomMenuDiv.classList.add('bottom-menu');
  homeDiv.append(bottomMenuDiv);
  bottomMenuDiv.append(buttonStart, buttonEvents, buttonNewPost, buttonProfile, buttonLogout);
}
