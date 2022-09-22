var guestsArray = ["David","Alny","Gwen","Nibila", "Lia", "Dany", "Tabe", "Vega", "Paco", "Xime", "Linden", "Liz", "Fernando", "Cesar", "Elsa Bueso", "Brigitte", "Fer"];
var counter = 0;
var currentName = document.getElementById("guest");
var arraylength = guestsArray.length - 1;

function display_names() {
    if(counter === arraylength){
        counter = 0;
    }
    else {
        counter++;  
    }
    currentName.innerHTML = guestsArray[counter];
}


setInterval(display_names, 500)