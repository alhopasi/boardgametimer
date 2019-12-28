

let timers = [];

var x;

var runningButton;

function newTimer(time) {
    return {time: time};
}

function initTimer(time, players) {
    console.log('initiating timer, time: ', time, ' players: ', players)
    timers = [];
    var endTime = 10 * 60 * time;
    for (i = 0; i < players; i++) {
        timers.push(newTimer(endTime));
    }
}

function printTime(timer) {
    value = timers[timer].time.toString();
    if (value > 599 || value < -599) {
        min = value/600;
        if (value < 0) {
            min = Math.ceil(min).toString();
        } else {
            min = Math.floor(min).toString();
        }
        sec = Math.abs(Math.floor((value/10)%60));
        if (sec < 10 && sec > -10) {
            sec = '0' + sec.toString();
        } else {
            sec.toString();
        }
        value = min + ':' + sec;
    } else {
        value = value.slice(0, value.length - 1) + '.' + value.slice(value.length - 1, value.length);
    }
    return value;
}

function printRealTime(timer) {
    console.log(timers[timer].time)
}

function printTimers() {
    for (i = 0; i < timers.length; i++) {
        console.log(printTime(i));
    }
}

function reduceTime(timer) {
    timers[timer].time -= 1;
}

function startTimer(timer) {
    stopTimer();

    if (runningButton == timer) {
        runningButton = null;
        return;
    }

    x = setInterval(function () {
        reduceTime(timer);

        res = printTime(timer);
        document.getElementById("time" + (timer+1).toString()).innerHTML = "<h2>" + res + "</h2>";

        runningButton = timer;
        document.getElementById("button" + (runningButton+1).toString()).innerHTML = "<h2>Stop!</h2>";
        document.getElementById("button" + (runningButton+1).toString()).className = "btn btn-danger"

    }, 100);
}

function stopTimer() {
    clearInterval(x);
    if (runningButton == null) {
        return
    }
    document.getElementById("button" + (runningButton+1).toString()).innerHTML = "<h2>Start!</h2>";
    document.getElementById("button" + (runningButton+1).toString()).className = "btn btn-success"
}

function loadTimes() {
    for (i = 0; i < timers.length; i++) {
        id = i +1;
        document.getElementById("id" + id.toString()).innerHTML = "<h2>" + id.toString() + "</h2>";
        res = printTime(i);
        document.getElementById("time" + id.toString()).innerHTML = "<h2>" + res + "</h2>";
    }
}