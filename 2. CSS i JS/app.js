// Deklarera konstanter för knapparna och resultat texten
const btnColor = document.querySelector('#color');
const btnSize = document.querySelector('#size');
const btnFont = document.querySelector('#font');
// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod

btnColor.addEventListener('click', changeColor);
btnSize.addEventListener('click', changeSize);
btnFont.addEventListener('click', changeFont);  

// Deklarera funktionerna/metoderna här
var color = true;
var size = true;
var font = true;
function changeColor(){
    if (color){
        btnColor.style.backgroundColor = 'green';
    } else {
        btnColor.style.backgroundColor = '#007bff';
    }
    color = !color;
}
function changeSize(){
    if (size){
        btnSize.style.width = '30%';
    } else {
        btnSize.style.width = '10%';
    }
    size = !size;
}
function changeFont(){
    if (font){
        btnFont.style.fontSize = '30px';
    } else {
        btnFont.style.fontSize = '16px';
    }
    font = !font;
}








// for(let i = 0; i < 10 ; i++){
//     var random = Math.floor((Math.random() * 10 + 1))
//     console.log(random);
// }