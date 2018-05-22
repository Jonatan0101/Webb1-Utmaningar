// Variabler
var list = document.querySelectorAll('li');

// Onload
window.onload = function(){
    list.forEach(li => {
        li.addEventListener('click', function(){
            if(this.classList.contains('active')){
                this.classList.remove('active');
            } else {
                this.classList.add('active');
                active = true;
            }

            
        })
    })
}

// Allt annat