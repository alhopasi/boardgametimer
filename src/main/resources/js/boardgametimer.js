

let timers = []

var x

function newTimer(time) {
    return {time: time};
}

function setEndTime(time, players) {
    timers = []
    var endTime = 10 * 60 * time;
    for (i = 0; i < players; i++) {
        timers.push(newTimer(endTime))
    }
}

function printTime(timer) {
    value = timers[timer].time.toString()
    res = value.slice(0, value.length - 1), value.slice(value.length - 1, value.length)
    return res
}

function printTimers() {
    for (i = 0; i < timers.length; i++) {
        console.log(printTime(i))
    }
}

function reduceTime(timer) {
    timers[timer].time -= 1
}

function startTimer(timer) {
    x = setInterval(function () {
        reduceTime(timer)
        console.log(timers[timer])
    }, 100)
}

function stopTimer() {
    clearInterval(x)
}