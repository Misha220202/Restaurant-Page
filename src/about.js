import map from './assets/images/map.png';

export const setAbout = (container) => {
    container.firstChild ? container.removeChild(container.firstChild) : null;
    const about = document.createElement('div');
    about.setAttribute('id', 'about');
    about.innerHTML = `
        <p id="tel">123-456-7890</p>
            <div id="hours">
                <p>
                    <span>Monday-Thursday:</span> 8am-8pm<br>
                    Friday-Sunday: 8am-11pm
                </p>
            </div>
            <p id="location">8888 Country Hills Blvd NW Unit 301, Calgary, AB T3G 5T4</p>
            <div class="imageContainer">
                <img src="${map}" alt="location">
            </div>
        </div>`
    container.appendChild(about);
}