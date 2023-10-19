const dropdown = document.getElementById("感情")
const emotions = {
    "中性(neutral)": {leftEye:"・",rightEye:"・",mouth:"ー"},
    "ハッピー(happy)": {leftEye:"・",rightEye:"・",mouth:"⋃"},
    "悲しい(sad)": {leftEye:"・",rightEye:"・",mouth:"⋂"},
    "驚いた(surprised)": {leftEye:"・",rightEye:"・",mouth:"Ｏ"},
    "とても驚いた(very surprised)": {leftEye:"⦿",rightEye:"⦿",mouth:"Ｏ"},
}
var leftEye = "・"
var rightEye = "・"
var mouth = "ー"
let untilnextminute = setInterval(function() {
    leftEye = emotions[dropdown.options[dropdown.selectedIndex].text]["leftEye"]
    rightEye = emotions[dropdown.options[dropdown.selectedIndex].text]["rightEye"]
    mouth = emotions[dropdown.options[dropdown.selectedIndex].text]["mouth"]
    let randomEye = Math.random()
    let setlefteye = randomEye < 0.1 ? "-" : leftEye
    let setrighteye = randomEye < 0.1 ? "-" : rightEye

    document.getElementById("フェース").innerHTML = setlefteye+mouth+setrighteye
}, 100 );

function copyFace() {
   // Copy the text inside the text field
  navigator.clipboard.writeText(leftEye+mouth+rightEye);

  // Alert the copied text
  alert("コピーに成功しました：" + leftEye+mouth+rightEye);
}