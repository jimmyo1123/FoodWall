/* POP UP */
var popupContainer = document.getElementById('popUpContainer');

const photoNodeList = document.getElementsByClassName('img-to-click');

//loop through all photos
const photoArr = Array.from(photoNodeList);
photoArr.forEach(cur => cur.onclick = clicked_show);

var popUpImg = document.getElementById('popupimg');
var captionText = document.getElementById('caption');    

function clicked_show(clicked) { /*detect the click*/
    popupContainer.style.display = 'block';
    popUpImg.src = this.src;
    captionText.innerHTML = this.alt;
}

//get span element
var span = document.getElementsByClassName('close')[0];

//when user click on span
span.onclick = function() {
    popupContainer.style.display = 'none';
}

/* Detecct img is horizontal one */
