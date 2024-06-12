import AsianPastaSalad from './assets/images/Asian Pasta Salad.webp';
import ChickenAvocadoAndMangoSalad from './assets/images/Chicken, Avocado and Mango Salad.webp';
import RealNawlinsMuffuletta from './assets/images/Real N\'awlins Muffuletta.webp';
import RoastBeefHorseradishRollUps from './assets/images/Roast Beef Horseradish Roll-Ups.webp';
import SaigonNoodleSalad from './assets/images/Saigon Noodle Salad.webp';
import TunaMacaroniSalad from './assets/images/Tuna Macaroni Salad.webp';

export const setMenu = (container) => {
    container.firstChild ? container.removeChild(container.firstChild) : null;
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.innerHTML = `
        <div class="menuItem">
            <div class="imageContainer">
                <img src="${AsianPastaSalad}" alt="Asian Pasta Salad">
            </div>
            <h1>Asian Pasta Salad</h1>
            <p>package spaghetti, toasted sesame seeds, green onions, red bell pepper, sugar snap peas</p>
        </div>
        <div class="menuItem">
            <div class="imageContainer">
                <img src="${ChickenAvocadoAndMangoSalad}" alt="Chicken, Avocado and Mango Salad">
            </div>
            <h1>Chicken, Avocado and Mango Salad</h1>
            <p>lime juice, chicken, peeled, seeded and diced mangos, peeled, pitted and diced avocados, spring lettuce
                mix</p>
        </div>
        <div class="menuItem">
            <div class="imageContainer">
                <img src="${RealNawlinsMuffuletta}" alt="Real N'awlins Muffuletta">
            </div>
            <h1>Real N'awlins Muffuletta</h1>
            <p>olives, cauliflower florets, capers, cocktail onions, celery, carrot, dried oregano</p>
        </div>
        <div class="menuItem">
            <div class="imageContainer">
                <img src="${RoastBeefHorseradishRollUps}" alt="Roast Beef Horseradish Roll-Ups">
            </div>
            <h1>Roast Beef Horseradish Roll-Ups</h1>
            <p>cream cheese, flour tortillas, spinach leaves, roast beef, cheese</p>
        </div>
        <div class="menuItem">
            <div class="imageContainer">
                <img src="${SaigonNoodleSalad}" alt="Saigon Noodle Salad">
            </div>
            <h1>Saigon Noodle Salad</h1>
            <p>rice noodles,Napa cabbage, carrots, grilled shrimp, bean sprouts, cucumber,green onions, mint, cilantro,
                basil, peanuts</p>
        </div>
        <div class="menuItem">
            <div class="imageContainer">
                <img src="${TunaMacaroniSalad}" alt="Tuna Macaroni Salad">
            </div>
            <h1>Tuna Macaroni Salad</h1>
            <p>package elbow macaroni, baby peas, celery, tuna, sweet onion, sweet pickle relish, hard-cooked eggs</p>
        </div>`
    container.appendChild(menu);
}