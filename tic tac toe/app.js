/* Step 1. When we click on game square, show if it's a X or O
*  'X' if it was player 1 and 'O' if it was player 2
*   Update the h1 to say whose turn it is
*   
*   Step 2. Determin when the game ends
*   when you click on a square, check to see the game ended (win or draw)
*   Update the text when the game ends
*   
*   Step 3. Restart game
*   When you click the restart game button, reset the board
*/
// horizontal wins
// 0, 1, 2
// 3, 4, 5
// 6, 7, 8
// vertical wins
// 0, 3, 6
// 1, 4, 7
// 2, 5, 8
// diagonal wins
// 0, 4, 8
// 2, 4, 6

const allSquares = document.querySelectorAll('.board__square');
const title = document.querySelector('.board__title');

let currentPlayer = 'X';
let board = []

allSquares.forEach((square, i) => {
    
    square.addEventListener('click', () => {        
        square.innerHTML = currentPlayer;

        checkWin();

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        title.innerHTML = `${currentPlayer}'s Turn`
    })
})

function checkWin() {
    const winningIndicies = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    winningIndicies.forEach((index, i) => {
        const matchingIndicies = index[i];
        console.log(matchingIndicies);
    })
}


// 15:17