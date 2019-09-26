/* POP UP */
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
    console.log("test: " + this.src);
    captionText.innerHTML = this.alt;
    console.log("test: " + this.alt);
}

//get span element
var span = document.getElementsByClassName('close')[0];

//when user click on span
span.onclick = function() {
    popupContainer.style.display = 'none';
}

/* RANDOM PHOTO ORDER */

//changing photos order
if (performance.navigation.type === 1) {
    var randomOrder = randomOrder(photoArr.length);
    var i = 0;
    while(i < photoArr.length){
        photoArr[i].removeAttribute('alt');
        photoArr[i].src = 'resources/img/food-' + randomOrder[i] +'.JPG';
        i++;
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





