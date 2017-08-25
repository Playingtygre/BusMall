'use strict';
////this is a click counter////
var totalClicks = 0;
var maxClicks = 5;

///constructor function of the items, name and URL/////
function Item (name, filePath, id) {
  this.name = name;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
  this.id = id;
  allItems.push(this);
}
var allItems = [];

var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var paths = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var ids = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

function createItems (){
  for (var i = 0; i < names.length; i++){
    new Item(names[i], paths[i], ids[i]);
  }
}

createItems();
var thisRound = [];
var lastRound = [];
var vote = [];
var show = [];

// make a function that rand
function makeThreeImages (){
  for (var i = 1; i < 4; i++) {
    var indexNum = Math.floor(Math.random() * allItems.length);
    if (lastRound.includes(indexNum) || thisRound.includes(indexNum)) {
      i--; // <---back one iteration
    } else {
      thisRound.push(indexNum);
      allItems[indexNum].timesShown++;
      var linkedImage = document.getElementById('image-' + i);
      linkedImage.setAttribute('src', allItems[indexNum].filePath);
      linkedImage.setAttribute('itemIdx', indexNum);
    }
  }
  lastRound = thisRound;
  thisRound = [];
}
makeThreeImages();
for (var i = 0; i < document.getElementsByClassName('clickable').length; i++) {
  var image = document.getElementById('image-' + (i + 1));
  image.addEventListener('click', onClick);
}
function onClick (event){

  var itemIdx = parseInt(event.target.getAttribute('itemIdx'));
  var itemIWant = allItems[itemIdx];
  itemIWant.timesClicked++;
  totalClicks++;
  if (totalClicks === maxClicks) {
    for (var i = 0; i < document.getElementsByClassName('clickable').length; i++) {
      var image = document.getElementById('image-' + (i + 1));
      image.removeEventListener('click', onClick);
    }
    makeThreeImages();
    var list = document.getElementById('list');
    for (var j = 0; j < allItems.length; j++) {
      var li = document.createElement('li');
      li.innerText = allItems[j].name + ' was clicked ' + allItems[j].timesClicked + ' times';
      list.appendChild(li);
    }
    for (var k = 0; k < allItems.length; k++) {
      vote.push(allItems[k].timesClicked);
      show.push(allItems[k].timesShown);
    }
  }
  storeClicks();
};

var storeClicks = function() {
  localStorage.setItem('clickCount', JSON.stringify(vote));
  localStorage.setItem('showCount', JSON.stringify(show));
};

if (localStorage.getItem('clickCount')) {
  var storedVotes = JSON.parse(localStorage.getItem('clickCount'));
  for (var i = 0; i < allItems.length; i++) {
    allItems[i].timesClicked = storedVotes[i];
  }
}
if (localStorage.getItem('showCount')) {
  var shown = JSON.parse(localStorage.getItem('showCount'));
  for (var i = 0; i < allItems.length; i++) {
    allItems[i].timesShown = shown[i];
  }
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// var chartConfig = {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // x-axis labels for every entry in your data set. It should match up with the number of things you're plotting (if it's a bar chart)
//     datasets: [{ // <-- notice that this can be an array of multiple data sets.
//       // each data set is its own object literal.
//       label: '# of Votes', // <-- the label of this one data set
//       data: vote, // <-- where your data actually goes. just the numbers
//       backgroundColor: [ // <-- this can be either one single color or a color for each item in your bar chart.
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255,99,132,1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 5 // border width in pixels
//     }]
//   },
//   options: {
//     // maintainAspectRatio: false,
//     // animation: {
//     //   duration: 1000
//     // },
//     title: {
//       display: true,
//       text: 'Some stuff and some junk'
//     },
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero:true
//         }
//       }]
//     }
//   }
// };
//
// var myChart = new Chart(ctx, chartConfig);
