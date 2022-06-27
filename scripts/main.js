var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/photo-2.jpg') {
      myImage.setAttribute ('src','images/photo-2.jpg');
    } else {
      myImage.setAttribute ('src','images/photo-2.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Час мочити рюзкіх, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Час мочити рюзкіх, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

  // HUI
  // HUI
  //ljlkhghfdgjhk