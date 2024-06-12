import './index.css';
import { setHome } from './home.js';
import { setMenu } from './menu.js';
import { setAbout } from './about.js';

const body = document.querySelector('body');

const buildHtmlPage = (() => {

    const header = document.createElement('header');
    header.innerHTML = `
            <h1 id="logo">Misha Restaurant</h1>
        <nav>
            <button value="Home">Home</button>
            <button value="Menu">Menu</button>
            <button value="About">About</button>
        </nav>`;
    body.appendChild(header);

    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);

    setHome(container);

    const footer = document.createElement('footer');
    footer.innerHTML = `Copyright@2024 MISHA`;
    body.appendChild(footer);

    const nav = document.querySelector('nav');
    nav.addEventListener('click', () => {
        const value = event.target.value;
        switch (value) {
            case 'Home':
                setHome(container);
                break;
            case 'Menu':
                setMenu(container);
                break;
            case 'About':
                setAbout(container);
                break;
        }
    })
})();