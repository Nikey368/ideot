let i = 1n;
let x = 3n * (10n ** 1020n);
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
            document.getElementById("input").innerHTML += num;
            digits += 1;
            document.getElementById("digits").innerHTML = "DIGITS: " + digits;
            return;
        }
    } else if (digits == 1 && document.getElementById("input").innerHTML.length == 1){
        document.getElementById("input").innerHTML += ".";
        return;
    }
    $.jStorage.set("pigamescores", Math.max($.jStorage.get("pigamescores", 0),digits))
    document.getElementById("digits").innerHTML = "SCORE: " + digits + ", HIGHSCORE: " + $.jStorage.get("pigamescores", 0);
    digits = 0
    document.getElementById("input").innerHTML = "";
}