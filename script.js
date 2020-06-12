const container = document.querySelector('#container');
let button = document.querySelector('#clear');
let colors = ['#ff0000', '#ffa500', '#0000ff', '#B7A369', '#008000', '#4b0082', '#ee82ee'];
let colorButton = document.querySelector('#color');


createGrid()

function createGrid() {
  for(i = 0; i<400; i++){ 
  let inside = document.createElement('div');
  inside.classList.add('inside');
  container.appendChild(inside);
  inside.onmouseover = () => inside.style.opacity = 1;
  }
}

function createGridColor() {
    for(i = 0; i<400; i++){ 
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  let inside = document.createElement('div');
  inside.classList.add('inside');
  container.appendChild(inside);
  inside.style.backgroundColor = randomColor
  inside.onmouseover = () => inside.style.opacity = 1; 
  }
}  

colorButton.addEventListener('mouseover', () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorButton.style.color = randomColor
}
                            )
  
  colorButton.addEventListener('click', () => {
let erase = document.getElementById('container');
let child = erase.lastElementChild;
while(child){
    erase.removeChild(child);
    child = erase.lastElementChild;
}
 createGridColor();
  }) 




    button.addEventListener('click', () => {
let erase = document.getElementById('container');
let child = erase.lastElementChild;
while(child){
    erase.removeChild(child);
    child = erase.lastElementChild;
}
createGrid();
})