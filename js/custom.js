// Getting DOM Elements
const day = document.getElementById('days')
const hour = document.getElementById('hours')
const minute = document.getElementById('minutes')
const second = document.getElementById('seconds')

const current_Year = new Date().getFullYear();

const setTime = new Date(`January, 23, ${current_Year + 1}, 00:00:00`);

function countDown() {
    const currentTime = new Date();

    // Getting milliseconds
    const count_down = setTime - currentTime;

    // Getting seconds
    const s = Math.floor(count_down/1000) % 24;

    // Getting Minutes
    const m = Math.floor(count_down/1000 /60) %60;

    // Getting Hrs
    const h = Math.floor(count_down/1000 /60 /60) % 24;

    // Getting Days
    const d = Math.floor(count_down/1000 /60 /60 /24);

    // Updating the DOM
    day.innerText = d >= 10? d:'0' + d;
    hour.innerText  = h >= 10? h:'0' + h;
    minute.innerText  = m >= 10? m:'0' + m;
    second.innerText  = s >= 10? s:'0' + s;
    
}



setInterval(countDown, 1000);

