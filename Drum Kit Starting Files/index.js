// Link de apoio com mais funções de botão
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/Events

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML)

    buttonAnimation(buttonInnerHTML)

  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key)

  buttonAnimation(event.key)
})

function makeSound(key){

  switch (key) {
    case "w":
      audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "d":
      audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "j":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
  

    case "k":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.play()
      break;


    case "l":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.play()
      break;


    default:
      break;
  }

}

function buttonAnimation(currentKey){

 var activeButton = document.querySelector("." +currentKey)
 activeButton.classList.add("pressed")



//  setTimeout https://www.w3schools.com/jsref/met_win_settimeout.asp
 

setTimeout(function (){
  
  activeButton.classList.remove("pressed")

}, 100); //unidade de contagem em segundos

}



