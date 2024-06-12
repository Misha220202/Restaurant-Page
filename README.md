# Restaurant-Page

existing bug:

import homeImage from './assets/images/homeImage.jpeg';
export const setHome = (container) => {
    container.firstChild ? container.removeChild(container.firstChild) : null;
    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    home.innerHTML = `
        <p class="introduction">Best restaurant in Canada!</p>
        <div class="imageContainer">
            <img src='${homeImage}' alt="homeImage">
        </div>
        <p class="introduction">"MISHA RESTAURANT IS FILLED WITH REGULARS AND OUR PEOPLE ARE WARM AND WELCOMING."</p>
        <p class="introduction">Order online or visit us!</p>`
    container.appendChild(home);
}
image load successfully
    
export const setHome = (container) => {
    container.firstChild ? container.removeChild(container.firstChild) : null;
    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    home.innerHTML = `
        <p class="introduction">Best restaurant in Canada!</p>
        <div class="imageContainer">
            <img src='./assets/images/homeImage.jpeg' alt="homeImage">
        </div>
        <p class="introduction">"MISHA RESTAURANT IS FILLED WITH REGULARS AND OUR PEOPLE ARE WARM AND WELCOMING."</p>
        <p class="introduction">Order online or visit us!</p>`
    container.appendChild(home);
}
map.png:1 
GET http://localhost:9000/assets/images/map.png 404 (Not Found)
Image (async)		
setAbout	@	about.js:9
eval	@	index.js:29
eval	@	index.js:35
./src/index.js	@	bundle.js:443
__webpack_require__	@	bundle.js:624
(anonymous)	@	bundle.js:1699
(anonymous)	@	bundle.js:1701