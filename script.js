//variables
let squaresNumber = 100;
let rainbowMode = 0;

//functions
function makeGrid() {
    for (let i = 0;i < Math.sqrt(squaresNumber); i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.setAttribute(
            'style',
            'display: flex; width:960px;height 30px; justify-content: center')
        for (let i = 0;i <  Math.sqrt(squaresNumber); i++) {
            const div = document.createElement('div');
            div.className = 'gridBox';
            div.setAttribute(
                'style',
                'width: 30px; height: 30px; background: aqua; flex: 0 1 auto;')
            row.appendChild(div);
        }
        const container = document.querySelector('.squaresContainer');
        container.append(row);
        const gridBoxes = document.querySelectorAll('.gridBox'); //draw functionality
        Array.from(gridBoxes).forEach(gridBox =>
            gridBox.addEventListener('click', function(){
            gridBox.style.backgroundColor = 'red';
            })
        )
    }}

function deleteGrid() {
    const rows = document.querySelectorAll('.row');
    const container = document.querySelector('.squaresContainer');
    Array.from(rows).forEach(row =>
        container.removeChild(row))
    }
        
makeGrid(); //draw initial grid

const resetButton = document.querySelector('button'); //reset button
resetButton.addEventListener('click', function() {
    let userNumber = parseInt(prompt('Choose a number'));
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
    }})