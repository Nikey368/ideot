var volume = true
var rainbowbg = true
var bgm = new Audio('../sound/pigame/pigame.wav')
var start = new Audio('../sound/pigame/literally just G.wav')
bgm.volume = 0.5;
start.loop = true;
bgm.loop = true;
let i = 1n;
let x = 3n * (10n ** 10020n);
let pi = x;
while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
}
let highscore = $.jStorage.get("pigamescores", 0)
let digits = 0

let startNote = new Audio('../sound/pigame/3.wav')

const noteSounds = [
    new Audio('../sound/pigame/0.wav'),
    new Audio('../sound/pigame/1.wav'),
    new Audio('../sound/pigame/2.wav'),
    new Audio('../sound/pigame/3.wav'),
    new Audio('../sound/pigame/4.wav'),
    new Audio('../sound/pigame/5.wav'),
    new Audio('../sound/pigame/6.wav'),
    new Audio('../sound/pigame/7.wav'),
    new Audio('../sound/pigame/8.wav'),
    new Audio('../sound/pigame/9.wav')
]

function playsound(){
    volume = !volume
    if (!start.paused){
        start.pause();
        start.load();
    }
    if (!bgm.paused){
        bgm.pause();
        bgm.load()
    }
    if (volume && digits > 1){
        bgm.play();
    }
}

function rainbow(){
    rainbowbg = !rainbowbg;
    document.getElementById("body").style = "background-image: linear-gradient(#ffffff,#ffffff); "
}

noteSounds.forEach(element => {
    element.load()
});

function input(num){
    if (volume){
        if (digits == 0){
            start.play();
        } else if (digits == 1){
            if (num == "."){
                startNote.play();
            }
            start.pause();
            start.load()
            bgm.play();
        }
    }
    if (num != "."){
        if (num == pi.toString().charAt(digits)) {
            if (volume) {
                let note = noteSounds[Number(num)]
                note.load()
                note.play()
            }
            if (rainbowbg){
                document.getElementById("body").style = "background-image: linear-gradient(hsl("+(36*num).toString()+", 100%, "+(85 + (15 * digits / 10000))+"%), hsl("+(36*num).toString()+", 100%, "+(75 + (15 * digits / 10000))+"%)); "
            }
            document.getElementById("input").innerHTML += num;
            digits += 1;
            if (digits >= 10000) {
                document.getElementById("digits").innerHTML = "YOU MADE IT TO 10000 DIGITS. TAKE A PHOTO OF THIS OCCASION!!!";
                $.jStorage.set("pigamescores", Math.max($.jStorage.get("pigamescores", 0),digits));
                document.getElementById("digits").innerHTML = "SCORE: " + digits + ", HIGHSCORE: " + $.jStorage.get("pigamescores", 0);
                digits = 0;
            }
            document.getElementById("digits").innerHTML = "DIGITS: " + digits;
            return;
        }
    } else if (digits == 1 && document.getElementById("input").innerHTML.length == 1){
        document.getElementById("input").innerHTML += ".";
        return;
    }
    if (volume){
        bgm.pause()
        bgm.load()
    }
    $.jStorage.set("pigamescores", Math.max($.jStorage.get("pigamescores", 0),digits));
    document.getElementById("body").style = "background-image: linear-gradient(#ffffff,#ffffff); "
    document.getElementById("digits").innerHTML = "SCORE: " + digits + ", HIGHSCORE: " + $.jStorage.get("pigamescores", 0);
    digits = 0;
    document.getElementById("input").innerHTML = "";
    if (volume){
        start.pause();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    if ((isFinite(event.key) && event.key !== ' ')){
        input(Number(event.key));
    } else if (event.key === ".") {
        input(".")
    }

    event.preventDefault();

});