const cafe = "Cafe/cafe-";
const dining = "CasualDining/dining-";
const dessert = "dessertDrink/dessert-";
const cafeNumber = 15;
const diningNumber = 39;
const dessertNumber = 9;

export const renderPhotos(type) {
    const text = '';
    const index;
    const markup;
    if (type === 'cafe') {
        text = cafe;
        index = parseInt(cafeNumber);
    }

    for (int i = 1; i <= index - 3; i += 3) {
        markup = `
        <ul class="gallery-container">

            <li class="photos">
                <img class="img-to-click" src="resources/img/${text}${i}.jpg">
            </li>
            <li class="photos">
                <img class="img-to-click" src="resources/img/${text}${i+1}.jpg">
            </li>
            <li class="photos">
                <img class="img-to-click" src="resources/img/${text}${i+2}.jpg">
            </li>
        </ul>
    `;
        document.querySelector('.cafe-gallery').insertAdjacentHTML('beforeend', markup);
    }
}
