let leftaudio = new Audio("../sound/leftearrightear/leftear.wav");
let rightaudio = new Audio("../sound/leftearrightear/rightear.wav");

let playing = false

leftaudio.volume = 0;
rightaudio.volume = 0;

leftaudio.loop = true;
rightaudio.loop = true;

document.getElementById("leftvol").addEventListener('input', function () {
    let newvolume = Number(document.getElementById("leftvol").value) / 100;
    leftaudio.volume = newvolume;
});

document.getElementById("rightvol").addEventListener('input', function () {
    let newvolume = Number(document.getElementById("rightvol").value) / 100;
    rightaudio.volume = newvolume;
});

function onPlay(){
    playing = !playing
    if (playing){
        leftaudio.play();
        rightaudio.play();
    } else {
        leftaudio.pause();
        rightaudio.pause();
        leftaudio.load();
        rightaudio.load();
    }
    
}