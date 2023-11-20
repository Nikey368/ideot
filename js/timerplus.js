let timer = new Date().getTime();
let amountMode = true;
let onebeep = 0
let twobeep = 0
let threebeep = 0
let fourbeep = 0
let longbeep = 0

function change() {
    amountMode = !amountMode
    if (amountMode) {
        document.getElementById("currentsetting").innerHTML = "current setting: amount of time"
    } else {
        document.getElementById("currentsetting").innerHTML = "current setting: exact time"
    }
}

function start() {
    let tempTime = 0
    if (amountMode) {
        let hour = document.getElementById("hours").value
        let minute = document.getElementById("minutes").value
        let second = document.getElementById("seconds").value
        let millisecond = document.getElementById("milliseconds").value
        let timestamp = Date.now() + (hour * 1000 * 60 * 60) + (minute * 1000 * 60) + (second * 1000) + Math.floor(millisecond / 1);
        console.log(timestamp)
        tempTime = new Date(timestamp * 1);
        timer = tempTime.getTime();
        onebeep = (tempTime - document.getElementById("onebeephours").value * 1000 * 60 * 60 - document.getElementById("onebeepminutes").value * 1000 * 60 - document.getElementById("onebeepseconds").value * 1000 - (document.getElementById("onebeepmilliseconds").value / 1))
        twobeep = (tempTime - document.getElementById("twobeephours").value * 1000 * 60 * 60 - document.getElementById("twobeepminutes").value * 1000 * 60 - document.getElementById("twobeepseconds").value * 1000 - (document.getElementById("twobeepmilliseconds").value / 1))
        threebeep = (tempTime - document.getElementById("threebeephours").value * 1000 * 60 * 60 - document.getElementById("threebeepminutes").value * 1000 * 60 - document.getElementById("threebeepseconds").value * 1000 - (document.getElementById("threebeepmilliseconds").value / 1))
        fourbeep = (tempTime - document.getElementById("threebeephours").value * 1000 * 60 * 60 - document.getElementById("fourbeepminutes").value * 1000 * 60 - document.getElementById("fourbeepseconds").value * 1000 - (document.getElementById("fourbeepmilliseconds").value / 1))
        longbeep = (tempTime - document.getElementById("longbeephours").value * 1000 * 60 * 60 - document.getElementById("longbeepminutes").value * 1000 * 60 - document.getElementById("longbeepseconds").value * 1000 - (document.getElementById("longbeepmilliseconds").value / 1))
    } else {
        let hour = document.getElementById("exacthour").value % 24
        let minute = document.getElementById("exactminute").value
        let now = new Date();
        tempTime = new Date()
        tempTime.setHours(hour,minute,0,0);
        if (hour < now.getHours() && now.getMinutes()) {
            tempTime = new Date(tempTime.now() + (24 * 1000 * 60 * 60))
        }
        timer = tempTime.getTime();
    }
    onebeep = (tempTime - document.getElementById("onebeephours").value * 1000 * 60 * 60 - document.getElementById("onebeepminutes").value * 1000 * 60 - document.getElementById("onebeepseconds").value * 1000 - (document.getElementById("onebeepmilliseconds").value / 1))
    twobeep = (tempTime - document.getElementById("twobeephours").value * 1000 * 60 * 60 - document.getElementById("twobeepminutes").value * 1000 * 60 - document.getElementById("twobeepseconds").value * 1000 - (document.getElementById("twobeepmilliseconds").value / 1))
    threebeep = (tempTime - document.getElementById("threebeephours").value * 1000 * 60 * 60 - document.getElementById("threebeepminutes").value * 1000 * 60 - document.getElementById("threebeepseconds").value * 1000 - (document.getElementById("threebeepmilliseconds").value / 1))
    fourbeep = (tempTime - document.getElementById("threebeephours").value * 1000 * 60 * 60 - document.getElementById("fourbeepminutes").value * 1000 * 60 - document.getElementById("fourbeepseconds").value * 1000 - (document.getElementById("fourbeepmilliseconds").value / 1))
    longbeep = (tempTime - document.getElementById("longbeephours").value * 1000 * 60 * 60 - document.getElementById("longbeepminutes").value * 1000 * 60 - document.getElementById("longbeepseconds").value * 1000 - (document.getElementById("longbeepmilliseconds").value / 1))
}

setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = timer
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let milliseconds = distance % 1000;  
      
    // Output the result in an element with id="demo"
    if (onebeep != timer && onebeep != 0 && now > onebeep) {
        onebeep = 0
        let sound = new Audio('../sound/timerplus/onebeep.wav');
        sound.play();
    }
    if (twobeep != timer && twobeep != 0 && now > twobeep) {
        twobeep = 0
        let sound = new Audio('../sound/timerplus/twobeep.wav');
        sound.play();
    }
    if (threebeep != timer && threebeep != 0 && now > threebeep) {
        threebeep = 0
        let sound = new Audio('../sound/timerplus/threebeep.wav');
        sound.play();
    }
    if (fourbeep != timer && fourbeep != 0 && now > fourbeep) {
        fourbeep = 0
        let sound = new Audio('../sound/timerplus/fourbeep.wav');
        sound.play();
    }
    if (longbeep != timer && longbeep != 0 && now > longbeep) {
        longbeep = 0
        let sound = new Audio('../sound/timerplus/longbeep.wav');
        sound.play();
    }

    if (distance <= 0) {
        timer = now
        return
    }
    document.getElementById("time").innerHTML = hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0) + "." + milliseconds.toString().padStart(3,0);
}, 1 );