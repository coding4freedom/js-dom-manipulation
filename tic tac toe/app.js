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
let gameOver = false;
let board = new Array(9);

allSquares.forEach((square, i) => {
    
    square.addEventListener('click', () => {  
        if (square.innerHTML || gameOver) {
            return;
        }      
        square.innerHTML = currentPlayer;
        board[i] = currentPlayer;
        

        if (checkWin()) {
            console.log('this ran');
            title.innerHTML = currentPlayer + ' has won the game';
            gameOver = true;
            return;
        }

        if (checkDraw()) {
            title.innerHTML = "Draw!";
            gameOver = true;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        title.innerHTML = `${currentPlayer}'s Turn`
    })
})

function checkDraw() {
    
    for (let i = 0; i < board.length; i++) {
        if(!board[i]) {
            return false;
        }        
    }
    return true;
}

function restart() {
    gameOver = false;
   // 1. Reset title
   title.innerHTML = `${currentPlayer}'s turn`;
   // 2. Reset DOM
    allSquares.forEach(square => {
        square.innerHTML = '';
    })
   // 3. Reset board
   board = new Array(9);
}

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
    for ( let i = 0; i < winningIndicies.length; i++) {
        const matchingIndicies = winningIndicies[i];
        
        let symbol1 = board[matchingIndicies[0]];
        let symbol2 = board[matchingIndicies[1]];
        let symbol3 = board[matchingIndicies[2]];
        
        if (!symbol1 || !symbol2 || !symbol3) {
            continue;
        }

        if (symbol1 === symbol2 && symbol2 === symbol3) {
            return true;
        }
    }
    
}


// 32:18