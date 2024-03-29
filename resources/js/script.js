/********************************
**********INSERT PHOTOS**********
********************************/

const cafe = "Cafe/cafe-";
const dining = "CasualDining/dining-";
const dessert = "dessertDrink/dessert-";
const cafeNumber = 15;
const diningNumber = 39;
const dessertNumber = 9;
var PhotosInserted = false;

function renderPhotos(type) {
    let text = '';
    let index = 0;
    let queryText = '';
    if (type === 'cafe') {
        text = cafe;
        index = parseInt(cafeNumber);
        queryText = '.cafe-gallery';
    } else if ( type === 'dining') {
        text = dining;
        index = parseInt(diningNumber);
        queryText = '.dining-gallery';
    } else if (type === 'dessert') {
        text = dessert;
        index = parseInt(dessertNumber);
        queryText = '.dessert-gallery';
    }

    for (var i = 1; i <= index - 2; i += 3) {
        const markup = `
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
        document.querySelector(queryText).insertAdjacentHTML('beforeend', markup);
    }
}
if(!PhotosInserted){
    renderPhotos('cafe');
    renderPhotos('dining');
    renderPhotos('dessert');
}


/********************
*******POP UP********
********************/

var popupContainer = document.getElementById('popUpContainer');

const photoNodeList = document.getElementsByClassName('img-to-click');
    
//convert node list to array
const photoArr = Array.from(photoNodeList);

//loop through all photos
photoArr.forEach(cur => cur.onclick = clicked_show);

var popUpImg = document.getElementById('popupimg');
var captionText = document.getElementById('caption');    

function clicked_show(clicked) { /*detect the click*/
    popupContainer.style.display = 'block';
    popUpImg.src = this.src;
}

//get span element
var span = document.getElementsByClassName('close')[0];

//when user click on span
span.onclick = function() {
    popupContainer.style.display = 'none';
}


/********************************
*******RANDOM PHOTO ORDER********
********************************/

//changing photos order
const cafeNodeList = document.querySelectorAll('.cafe-gallery .img-to-click');
const cafePhoto = Array.from(cafeNodeList);
const diningNodeList = document.querySelectorAll('.dining-gallery .img-to-click');
const diningPhoto = Array.from(diningNodeList);
const dessertNodeList = document.querySelectorAll('.dessert-gallery .img-to-click');
const dessertPhoto = Array.from(dessertNodeList);

if (performance.navigation.type === 1) {
    var cafeRandomOrder = randomOrder(cafePhoto.length);
    var diningRandomOrder = randomOrder(diningPhoto.length);
    var dessertRandomOrder = randomOrder(dessertPhoto.length);
    var i = 0, j = 0, k = 0;
    while(i < cafePhoto.length){
        cafePhoto[i].src = 'resources/img/Cafe/cafe-' + cafeRandomOrder[i] +'.jpg';
        i++;
    }
    while(j < diningPhoto.length){
        diningPhoto[j].src = 'resources/img/CasualDining/dining-' + diningRandomOrder[j] +'.jpg';
        j++;
    }
    while(k < dessertPhoto.length){
        dessertPhoto[k].src = 'resources/img/dessertDrink/dessert-' + dessertRandomOrder[k] +'.jpg';
        k++;
    }
}

function randomOrder(length){
    var totalNum = getNumArray(length); //create num array 1~length
    var randomNumArr = [];
    for(var i = totalNum.length - 1;i >= 0; i--){
        var randomNum = Math.floor(Math.random()*totalNum.length); //select random number in the array
        randomNumArr.push(totalNum[randomNum]);
        totalNum.splice(randomNum, 1); //remove num in the array to avoid same result appear again
    }
    return randomNumArr;
}

function getNumArray(length){
    var nums = [];
    for(var i = 1;i <= length ; i++){
        nums.push(i);
    }
    return nums;
}




