const dropdown = document.getElementById("感情")
const emotions = {
    "中性": {leftEye:"・",rightEye:"・",mouth:"ー"},
    "ハッピー": {leftEye:"・",rightEye:"・",mouth:"⋃"},
    "悲しい": {leftEye:"・",rightEye:"・",mouth:"⋂"},
    "驚いた": {leftEye:"・",rightEye:"・",mouth:"Ｏ"},
    "とても驚いた": {leftEye:"⦿",rightEye:"⦿",mouth:"Ｏ"},
}
var leftEye = "・"
var rightEye = "・"
var mouth = "ー"
let untilnextminute = setInterval(function() {
    leftEye = emotions[dropdown.options[dropdown.selectedIndex].value]["leftEye"]
    rightEye = emotions[dropdown.options[dropdown.selectedIndex].value]["rightEye"]
    mouth = emotions[dropdown.options[dropdown.selectedIndex].value]["mouth"]
    let randomEye = Math.random()
    let setlefteye = randomEye < 0.1 ? "-" : leftEye
    let setrighteye = randomEye < 0.1 ? "-" : rightEye

    document.getElementById("フェース").innerHTML = setlefteye+mouth+setrighteye
}, 100 );

function copyFace() {
  navigator.clipboard.writeText(leftEye+mouth+rightEye);

  alert("コピーに成功しました：" + leftEye+mouth+rightEye);
}