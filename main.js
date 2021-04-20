let inter = 1000;
let analogClock = (selector, time) => {
    document.querySelector(selector).style.transform = `rotate(${time}deg)`;
}
const clock = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;
    const h = (hours < 10) ? "0" + hours : hours;
    const m = (minutes < 10) ? "0" + minutes : minutes;
    document.querySelector('.hours').innerHTML = h;
    document.querySelector('.mins').innerHTML = m;
    analogClock('.hour', hour);
    analogClock('.minute', minute);
    analogClock('.second', second);
}

const classes = document.getElementsByClassName('currentDate');

Object.values(classes).forEach(val => {
    val.innerHTML = (new Date()).toString().split(' ').splice(1,3).join(' ');
})

setInterval(clock, inter);
