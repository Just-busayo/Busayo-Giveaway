let $ = (id) => {
    return document.getElementById(id);
}

let $days = $('bdays');
let $hours = $('bhours');
let $minutes = $('bminutes');
let $seconds = $('bseconds');
let nowDate = new Date();

let targetDate = new Date(nowDate.getTime() + (10*24*60*60*1000));
dateFormat = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.querySelector('.deadline').textContent = targetDate.toLocaleDateString('en-US', dateFormat);

let countDowntimer = () => {
    let timeinSec = Math.floor((targetDate.valueOf() - new Date().valueOf()) / 1000
    );

    if (timeinSec < 0){
        timeinSec = 0;
    }
    
    let seconds = Math.floor(
        timeinSec % 60
    );
    let minutes = Math.floor(
        (timeinSec / 60) % 60
    );
    let hours = Math.floor(
        (timeinSec / 60 / 60) % 24
    );
    let days = Math.floor(
        timeinSec / 60 / 60 / 24
    );

    let format= (num) => {
        return `${num}`.padStart(2, '0'); //used to ensure that there is a consistent two-digit display for each unit of time
    };

    $seconds.textContent = format(seconds);
    $minutes.textContent = format(minutes);
    $hours.textContent = format(hours);
    $days.textContent = format(days);

};

setInterval(countDowntimer, 1000);
