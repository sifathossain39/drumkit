//detecting button pressed

var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberofDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

// detecting key pressed

document.addEventListener("keypress", function (e) {

  makesound(e.key);

  buttonAnimation(e.key);

});






//function for play sound

function makesound(key) {

  switch (key) {
    case "s":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "i":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "f":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "a":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "t":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "h":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentkey){

  var activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}