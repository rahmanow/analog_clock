let inter = 1000;

const analogClock = (selector, time) => {
    document.querySelector(selector).style.transform = `rotate(${time}deg)`;
}

const digitalClock = (selector, showSeconds) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const h = (hours < 10) ? "0" + hours : hours;
    const m = (minutes < 10) ? "0" + minutes : minutes;
    const s = (showSeconds) ? (seconds < 10) ? "0" + seconds : seconds : '';
    document.querySelector(selector).innerHTML = "<span class=\"hours\">" + h + ":</span><span class=\"mins\">" + m + "</span><span class=\"secs\">" + s + "</span>";
}

const showDate = (showDate) => {
    const classes = document.getElementsByClassName('currentDate');
    return (showDate) ? Object.values(classes).forEach(val => {
        val.innerHTML = (new Date()).toString().split(' ').splice(1,3).join(' ');
    }) : '';
}

const clock = () => {
    const date = new Date();
    const hour = date.getHours() * 30;
    const minute = date.getMinutes() * 6;
    const second = date.getSeconds() * 6;
    analogClock('.hour', hour);
    analogClock('.minute', minute);
    analogClock('.second', second);
    digitalClock('.timing', true);
}

showDate(true);
setInterval(clock, inter);
