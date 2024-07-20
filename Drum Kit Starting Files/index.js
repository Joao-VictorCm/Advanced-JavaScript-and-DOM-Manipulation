// Link de apoio com mais funções de botão
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/Events


var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    
       this.style.color = "blue"
       
    });


}

// var audioTest = new Audio('./sounds/tom-1.mp3')
// audioTest.play()

