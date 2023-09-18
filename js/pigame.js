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
function input(num){
    if (num != "."){
        if (num == pi.toString().charAt(digits)) {
            document.getElementById("body").style = "background-image: linear-gradient(hsl("+(36*num).toString()+", 100%, 85%), hsl("+(36*num).toString()+", 100%, 75%)); "
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
    $.jStorage.set("pigamescores", Math.max($.jStorage.get("pigamescores", 0),digits));
    document.getElementById("body").style = "background-image: linear-gradient(#ffffff,#ffffff); "
    document.getElementById("digits").innerHTML = "SCORE: " + digits + ", HIGHSCORE: " + $.jStorage.get("pigamescores", 0);
    digits = 0;
    document.getElementById("input").innerHTML = "";
}