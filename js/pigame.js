let i = 1n;
let x = 3n * (10n ** 1020n);
let pi = x;
while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
}
console.log(pi)
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
    digits = 0
    document.getElementById("digits").innerHTML = "SCORE: " + digits;
    document.getElementById("input").innerHTML = "";
}