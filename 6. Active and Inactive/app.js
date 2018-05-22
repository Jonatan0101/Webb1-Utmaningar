// Variabler
var list = document.querySelectorAll('li');
// Onload
window.onload = function(){
    list.forEach(li => {
        li.addEventListener('click', function(){
            li.classList.add('active');
        })
    })
}
// Allt annat