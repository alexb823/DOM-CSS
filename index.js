const colors = ['blue', 'green', 'yellow', 'orange', 'rgb(0,0,0)'];

const body = document.querySelector('body');
// Creat some default elements
const squares = document.createElement('div');
const buttons = document.createElement('div');
const header = document.createElement('h1');
const hideAllBtn = document.createElement('button');
const showAllBtn = document.createElement('button');

header.textContent = 'The Squares Demo';
squares.id = 'squares';
buttons.id = 'buttons';
hideAllBtn.textContent = 'Hide All the Squares';
showAllBtn.textContent = 'Show All the Squares';
hideAllBtn.classList.add('colorButton');
showAllBtn.classList.add('colorButton');

// Add the default elements to the DOM and add event listeners to show and hide all buttons
function addDefaultElements() {
  body.appendChild(header);
  body.appendChild(squares);
  body.appendChild(buttons);
  buttons.appendChild(hideAllBtn);
  buttons.appendChild(showAllBtn);
  hideAllBtn.addEventListener('click', () => {
    squares.style.display = 'none';
  });
  showAllBtn.addEventListener('click', () => {
    squares.style.display = 'flex';
  });
}

// Generates the color squares
function makeColorSquares(colors) {
  colors.forEach(color => {
    const colorSquare = document.createElement('div');
    colorSquare.id = color;
    colorSquare.style.backgroundColor = color;
    colorSquare.classList.add('square');
    squares.appendChild(colorSquare);
  });
}
//Generates buttons for all colors and event listeners for the buttons
function makeToggleButtons(colors) {
  colors.forEach(color => {
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('colorButton');
    toggleButton.textContent = `toggle ${color}`;
    toggleButton.addEventListener('click', () => {
      const colorSquare = document.querySelector(`#${color}`);
      colorSquare.classList.toggle('hideElem');
    });
    buttons.appendChild(toggleButton);
  });
}

function generateDom(colors) {
  addDefaultElements();
  makeColorSquares(colors);
  makeToggleButtons(colors);
}

generateDom(colors); //should generate squares, buttons and event handlers
