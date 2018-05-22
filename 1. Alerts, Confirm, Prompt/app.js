// Deklarera konstanter för knapparna och resultat texten

const btnAlert = document.querySelector('#alert');
const btnConfirm = document.querySelector('#confirm');
const btnPrompt = document.querySelector('#prompt');
const header = document.querySelector('#result');

// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod

btnAlert.addEventListener('click', showAlert);
btnConfirm.addEventListener('click', showConfirm);
btnPrompt.addEventListener('click', showPrompt);

// Deklarera funktionerna/metoderna här

function showAlert(){
    alert('Hello!');
    header.innerHTML = 'Alert used!';
}
function showConfirm(){
    let check = confirm('Are you sure');
    if(check){
        header.innerHTML = 'Great!'
    } else {
        header.innerHTML= 'Too bad!'
    }
}
function showPrompt(){
    let check = prompt('Name?');
    if(check === 'Jonatan'){
        header.innerHTML = check + ' är rätt svar, så här är hemliga länken: <a href="https://www.google.se">hej</a>' ; 
    } else {
        header.innerHTML = 'FEL SVAR!'
    }
      
}
