// Variabler
var list = document.querySelectorAll('li');

// Onload
window.onload = function(){
    list.forEach(li => {
        li.addEventListener('click', removeActive)
    })
}

// Kör funktionen när man trycker på en sak i listan

function removeActive(){
     list.forEach(li => { // Kör funktionen för varje element i listan
         if(li.classList.contains('active')){ //Tar bort klassen "active" om den innehåller det, annars skriver den det i loggen att den inte gör det
             li.classList.remove('active');
         } else {
             console.log('innehåller ej');
         }
     });
    
    this.classList.add('active'); //När alla har tagits bort läggs active till till den man tryckt på!s
     
}
