function generate(){
	let name = document.getElementById("name").value;
    let birthday = document.getElementById("birthday").value;
    name = name.toLowerCase();
    let username = name.substring(0,3) + name[name.length - 2] + "a";
    let year = Number(birthday.substring(5,7)) + birthday.substring(2,4)
    document.getElementById("output").innerHTML = username + year
}

let funValue = Math.floor(Math.random() * 100)
console.log("the fun value is: "+funValue)

if (funValue == 85) {
    document.getElementsByClassName("title")[0].innerHTML = "JERMA";
    document.body.style.backgroundImage = "url('../img/theman.png')";
    document.body.style.backgroundRepeat = "repeat"
}