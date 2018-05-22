// Deklarera konstanter för knapparna och resultat texten
const btnToggle = document.querySelector('#toggle');
const heading = document.querySelector('#message');
// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod
btnToggle.addEventListener('click', hideMessage);
// Deklarera allt annat här
var showing = true;


function hideMessage(){
    if(showing){
        heading.style.opacity = '0';
    } else {
        heading.style.opacity = '1';
    }

    showing = !showing;
}