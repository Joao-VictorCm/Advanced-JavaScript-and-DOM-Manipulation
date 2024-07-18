// Link de apoio com mais funções de botão
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/Events


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){

    document.querySelector(".drum")[i].addEventListener("click", function (){
        alert("clicado")
    });


}


