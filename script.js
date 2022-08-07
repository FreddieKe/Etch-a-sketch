//variables
let squaresNumber = 100;
let rainbowMode = 0;

//functions
function makeRow() {
    const row = document.createElement('div');
    row.className = 'row';
    row.setAttribute(
            'style',
            'display: flex; width:960px;height 30px; justify-content: center')
    return row;
}

function makeGridBoxes(row) {
    const div = document.createElement('div');
            div.className = 'gridBox';
            div.setAttribute(
                'style',
                'width: 30px; height: 30px; background: aqua; flex: 0 1 auto;')
            row.appendChild(div);
}

function makeGrid() {
    for (let i = 0;i < Math.sqrt(squaresNumber); i++) {
        const row = makeRow();
        for (let i = 0;i <  Math.sqrt(squaresNumber); i++) {
            makeGridBoxes(row);
        const container = document.querySelector('.squaresContainer');
        container.append(row);
        }
    }
}

function deleteGrid() {
    const rows = document.querySelectorAll('.row');
    const container = document.querySelector('.squaresContainer');
    Array.from(rows).forEach(row =>
        container.removeChild(row))
    }

function resetDraw() {
    const gridBoxes = document.querySelectorAll('.gridBox'); //draw functionality
    Array.from(gridBoxes).forEach(gridBox =>
        gridBox.replaceWith(gridBox.cloneNode(true))
    )
}
function setDraw() {
    const gridBoxes = document.querySelectorAll('.gridBox'); //draw functionality
    Array.from(gridBoxes).forEach(gridBox =>
        gridBox.addEventListener('mouseover', function(){
            if (rainbowMode === 0) {
                gridBox.style.backgroundColor = 'rgb(255, 0, 0)';
            }
            else if (rainbowMode === 1) {
                let rgbA = Math.floor((Math.random()*255)+1);
                let rgbB = Math.floor((Math.random()*255)+1);
                let rgbC = Math.floor((Math.random()*255)+1);
                gridBox.style.backgroundColor = `rgb(${rgbA}, ${rgbB}, ${rgbC})`;
            }
        })
    )
}

const resetButton = document.querySelector('.reset'); //reset button
resetButton.addEventListener('click', function() {
    let userNumber = parseInt(prompt('Choose your preferred number of squares:'));
    for (let i = 0; i < 1;) {
        if (typeof(userNumber) == 'number') {
            if (userNumber > 100) {
                userNumber = parseInt(prompt('I\'m sorry, choose a smaller number!'))
            } else {
            squaresNumber = userNumber;
            i = 1;
            }
        } else {
            userNumber = parseInt(prompt('I\'m sorry, I didn\'t understand that. Please choose a number!'));
        }
    deleteGrid();
    makeGrid();
    setDraw();
    }})

const rainbowButton = document.querySelector('.toggle');
rainbowButton.addEventListener('click', function() {
    if (rainbowMode !== 1) {
        rainbowMode = 1;
    } else {
        rainbowMode = 0;
    };
    resetDraw();
    setDraw();
})

makeGrid(); //draw initial grid
resetDraw();
setDraw();
