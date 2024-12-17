
let cancelId;
let startTime;
let savedTime = 0;
const countdown = 25 * 60 * 1000;

const milisTimer = document.querySelector('.timer__milliseconds');
const secondsTimer = document.querySelector('.timer__seconds');
const minutesTimer = document.querySelector('.timer__minutes');

function startTimer() {
    startTime = Date.now();
    
    console.log('start');
    cancelId =  requestAnimationFrame(updateTimer);
}

function stopTimer() {
    
    savedTime = Date.now() - startTime + savedTime;
    cancelAnimationFrame(cancelId)
    console.log('stop');
}

function resetTimer() {
    startTime = Date.now();
    savedTime = 0;
    
    milisTimer.innerHTML = '00';
    secondsTimer.innerHTML = '00';
    minutesTimer.innerHTML = '25';
    console.log('reset');
}

function updateTimer() {
    let milisElapsed = Date.now() - startTime + savedTime;

    let timeLeftInMs = countdown - milisElapsed;
    let secondsLeft = timeLeftInMs / 1000;
    let minutesLeft = secondsLeft / 60;

    let milisText = timeLeftInMs % 1000;
    let secondesText = Math.floor(secondsLeft % 60);
    let minutesText = Math.floor(minutesLeft);

    if ( milisText.toString().length < 3) {
        milisText = milisText.toString().padStart(3, '0');
    }
    if ( secondesText.toString().length < 2) {
        secondesText = secondesText.toString().padStart(2, '0');
    }
    if ( minutesText.toString().length < 2) {
        minutesText = minutesText.toString().padStart(2, '0');
    }

    milisTimer.innerHTML = milisText;
    secondsTimer.innerHTML = secondesText;
    minutesTimer.innerHTML = minutesText;

    cancelId = requestAnimationFrame(updateTimer);
}