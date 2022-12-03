
const time = document.querySelector('#time');

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const res = document.querySelector('#reset');
const add = document.querySelector('#add');
const div = document.querySelector('#addtime')
let interval = null, h = 0, m = 0, s = 0, ms = 0,
    hours = 0, minutes = 0, seconds = 0, milliseconds = 0;


start.addEventListener('click', () => {
    if (interval !== null) {
        clearInterval(interval);
    }
    interval = setInterval(clock, 10);
    add.style.display = 'inline';
})
stop.addEventListener('click', () => {
    clearInterval(interval);
    add.style.display = 'none';
})
reset.addEventListener('click', () => {
    time.innerHTML = '00:00:00:000';
    // clearInterval(interval);
    div.innerHTML = '';
    add.style.display = 'none';
})
add.addEventListener('click', () => {
    div.innerHTML += ` ${h} : ${m} : ${s} : ${ms} <br> `;
})



function clock() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    h = (hours < 10) ? '0' + hours : hours;
    m = (minutes < 10) ? '0' + minutes : minutes;
    s = (seconds < 10) ? '0' + seconds : seconds;
    ms = (ms < 10) ? '00' + milliseconds : (milliseconds < 100) ? '0' + milliseconds : milliseconds;
    time.innerHTML = `${h}:${m}:${s}:${ms}`;

}





