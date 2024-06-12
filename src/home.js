import homeImage from './assets/images/homeImage.jpeg';

export const setHome = (container) => {
    container.firstChild ? container.removeChild(container.firstChild) : null;
    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    home.innerHTML = `
        <p class="introduction">Best restaurant in Canada!</p>
        <div class="imageContainer">
            <img src="${homeImage}" alt="homeImage">
        </div>
        <p class="introduction">"MISHA RESTAURANT IS FILLED WITH REGULARS AND OUR PEOPLE ARE WARM AND WELCOMING."</p>
        <p class="introduction">Order online or visit us!</p>`
    container.appendChild(home);
}