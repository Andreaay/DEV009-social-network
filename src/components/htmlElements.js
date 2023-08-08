export function titleBox2() {
    const title = document.createElement('h1');
    title.textContent = 'Expressio Music';
    const textTitleContainer = document.createElement('div');
    textTitleContainer.classList.add('title-container');
    textTitleContainer.append(title);
    return title;
}
export function bottomMenu2(navigateTo,logOutUser) {
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
                console.log(alertOutUser);
            }
        };
        logOutUser(alertOutUser);
    });
    buttonStart.addEventListener('click', () => {
        alert('que onda');
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
    bottomMenuDiv.append(buttonStart, buttonEvents, buttonNewPost, buttonProfile, buttonLogout);
    return bottomMenuDiv
}