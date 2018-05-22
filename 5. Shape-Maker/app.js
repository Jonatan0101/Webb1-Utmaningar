// Deklarera konstanter för HTML-elementen

const shape = document.querySelector('#shape');
const color = document.querySelector('#color');
const create = document.querySelector('#create');
const placement = document.querySelector('#placement');
const counter = document.querySelector('#counter')

// Lägg till click-event listeners

create.addEventListener('click', createShape);

// Deklarera allt annat här

var amount = 0;



function createShape(){
    let element = document.createElement('div');
    let shapeValue = shape.options[shape.selectedIndex].value;
    let colorValue = color.options[color.selectedIndex].value;
    element.classList.add(shapeValue, colorValue);
    document.body.shape-placement.appendChild(element);
    amount++;
    counter.textContent = amount;
}