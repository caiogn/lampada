/*document.addEventListener("DOMContentLoaded", function() { */ 

const lamp = document.querySelector("#on img")
const button = document.querySelector("#apertar")
const info = document.querySelector("#info h1")

let lampadaAcesa = true; 

button.addEventListener('click', function() {
    if(lampadaAcesa) {
        lamp.src= "./img/desligada.jpg";
        button.textContent = "LIGAR";
        info.textContent = "Lampada Apagada";
    }
    else {
        lamp.src = "./img/ligada.jpg";
        button.textContent = "DESLIGAR";
        info.textContent = "Lampada Acesa";
    }
    lampadaAcesa = !lampadaAcesa;
});
//});