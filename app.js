////create a photo array////
var image_url = new Array();
image_url[0] = 'img/banana.jpg';
image_url[1] = 'img/bathroom.jpg';
image_url[2] = 'img/boots.jpg';
image_url[3] = 'img/breakfast.jpg';
image_url[4] = 'img/bubblegum.jpg';
image_url[5] = 'img/chair.jpg';
image_url[6] = 'img/cthulhu.jpg';
image_url[7] = 'img/dog-duck.jpg';
image_url[8] = 'img/dragon.jpg';
image_url[9] = 'img/pen.jpg';
image_url[10] = 'img/pet-sweep.jpg';
image_url[11] = 'img/scissors.jpg';
image_url[12] = 'img/shark.jpg';
image_url[13] = 'img/sweep.png';
image_url[14] = 'img/tauntaun.jpg';
image_url[15] = 'img/unicorn.jpg';
image_url[16] = 'img/usb.gif';
image_url[17] = 'img/water-can.jpg';
image_url[18] = 'img/wine-glass.jpg';
image_url[19] = 'img/bag.jpg';

var item1 = image_url[Math.floor(Math.random() * image_url.length)];
var item2 = image_url[Math.floor(Math.random() * image_url.length)];
var item3 = image_url[Math.floor(Math.random() * image_url.length)];
console.log(item1);
console.log(item2);
console.log(item3);

////display a event handler/////
// possible working event
var body = document.getElementsByTagName('body')[0];
function newContent1() {
  var element = document.createElement('img');
  element.setAttribute('src', item1);
  body.appendChild(element);
};

var body = document.getElementsByTagName('body')[0];
function newContent2() {
  var element = document.createElement('img');
  element.setAttribute('src', item2);
  body.appendChild(element);
};

var body = document.getElementsByTagName('body')[0];
function newContent3() {
  var element = document.createElement('img');
  element.setAttribute('src', item3);
  body.appendChild(element);
};
newContent1();
newContent2();
newContent3();
/////create an array of only three images random

////call photo array///

///add event listners///

///create random numer/////
