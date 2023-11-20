const dropdown = document.getElementById("感情")
const emotions = {
    "中性": {leftEye:"・",rightEye:"・",mouth:"ー",blinking:true},
    "ハッピー": {leftEye:"・",rightEye:"・",mouth:"⋃",blinking:true},
    "悲しい": {leftEye:"・",rightEye:"・",mouth:"⋂",blinking:true},
    "驚いた": {leftEye:"・",rightEye:"・",mouth:"Ｏ",blinking:true},
    "とても驚いた": {leftEye:"⦿",rightEye:"⦿",mouth:"Ｏ",blinking:true},
    "ああああああああ！": {leftEye:"＞",rightEye:"＜",mouth:"Ｏ",blinking:false},
}
var leftEye = "・"
var rightEye = "・"
var mouth = "ー"
let untilnextminute = setInterval(function() {
    leftEye = emotions[dropdown.options[dropdown.selectedIndex].value]["leftEye"]
    rightEye = emotions[dropdown.options[dropdown.selectedIndex].value]["rightEye"]
    mouth = emotions[dropdown.options[dropdown.selectedIndex].value]["mouth"]
    let randomEye = Math.random()
    let setlefteye = randomEye < 0.1 && emotions[dropdown.options[dropdown.selectedIndex].value]["blinking"] ? "-" : leftEye
    let setrighteye = randomEye < 0.1 && emotions[dropdown.options[dropdown.selectedIndex].value]["blinking"]  ? "-" : rightEye

    document.getElementById("フェース").innerHTML = setlefteye+mouth+setrighteye
}, 100 );

function copyFace(withbrackets) {
   // Copy the text inside the text field
  navigator.clipboard.writeText(leftEye+mouth+rightEye);

  // Alert the copied text
  alert("コピーに成功しました：" + leftEye+mouth+rightEye);
}