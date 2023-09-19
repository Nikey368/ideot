const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const difii = {
    1: "#55FE7E",
    2: "#FBFA70",
    3: "#FE547E",
    4: "#A954FE",
    5: "#E78935",
    6: "#E54100"
}
var saveddiffi = 0

function calculate(){
	let current = document.getElementById("current").value;
    let boost = Math.round((Number(document.getElementById("boost").value) + Number.EPSILON) * 2) / 2;
    let survivors = document.getElementById("survivors").value;
    let total = document.getElementById("total").value;
    let db = -0.4
    let output = 0
    if (current >= 2 & current < 3) {
        db = -0.5
    } else if (current >= 3 & current < 4) {
        db = -0.6
    } else if (current >= 4 & current < 5) {
        db = -0.65
    } else if (current >= 5 & current < 6) {
        db = -1.5
    } else if (current >= 6) {
        db = -2
    }
    output = clamp(Number(current) + Number(boost) + db + (Math.round(((Number(survivors) / Number(total)) + Number.EPSILON) * 100) / 100),1,5.99)
    mindiffi = clamp(Number(current) + Number(boost) + db,1,5.99)
    maxdiffi = clamp(Number(current) + Number(boost) + db + 1, 1,5.99)
    document.getElementById("output").innerHTML = Math.round((output + Number.EPSILON) * 100) / 100 + ", difficulty range: "+mindiffi.toFixed(2)+" to "+maxdiffi.toFixed(2);
    document.getElementById("output").style.color = difii[Math.floor(output)]
    document.getElementById("extras").style.color = difii[Math.floor(output)]
    document.getElementById("crazy").style.color = difii[Math.floor(output)]
    saveddiffi = Math.round((output + Number.EPSILON) * 100) / 100
    let reqsurvivors = 0
    let reqboosts = 0
    if (Math.floor(mindiffi) < Math.floor(Number(current))) {
        if (Math.abs(Math.floor(Number(current)) - mindiffi) < 1) {
            for (reqsurvivors = 0; reqsurvivors < total; reqsurvivors++) {
                if (mindiffi + reqsurvivors / Number(total) >= Math.floor(Number(current))) {
                    break
                }
            }
        } else {reqsurvivors = -1}
        for (reqboosts = 0; reqboosts < 2.5; reqboosts += 0.5) {
            if (mindiffi + reqboosts >= Math.floor(Number(current))) {
                break
            }
        }
    }
    if (reqsurvivors >= 0) {
        document.getElementById("extras").innerHTML = "currently, to keep the current difficulty, you need "+reqsurvivors+" player(s) to survive. alternatively, you can boost "+reqboosts.toFixed(1)+" more."
    } else {
        document.getElementById("extras").innerHTML = "currently, to keep the current difficulty, you need to boost "+reqboosts.toFixed(1)+" more."
    }
    reqsurvivors = 0
    reqboosts = 0
    if (Math.floor(mindiffi) < 5) {
        if (Math.abs(5 - mindiffi) < 1) {
            for (reqsurvivors = 0; reqsurvivors < total; reqsurvivors++) {
                if (mindiffi + reqsurvivors / Number(total) >= 5) {
                    break
                }
            }
        } else {reqsurvivors = -1}
        for (reqboosts = 0; reqboosts < 6; reqboosts += 0.5) {
            if (mindiffi + reqboosts >= 5) {
                break
            }
        }
        if (reqboosts + Number(boost) > 2.5) {reqboosts = -1}
    }
    if (reqsurvivors >= 0) {
        document.getElementById("crazy").innerHTML = "currently, to guarantee getting to crazy, you need "+reqsurvivors+" player(s) to survive. alternatively, you can boost "+reqboosts.toFixed(1)+" worth."
    } else if (reqboosts >= 0) {
        document.getElementById("crazy").innerHTML = "currently, to guarantee getting to crazy, you need to boost "+reqboosts.toFixed(1)+" worth."
    } else (
        document.getElementById("crazy").innerHTML = "it is impossible to get to crazy at this stage."
    )
}

function increase(id,amount) {
    document.getElementById(id).value = Math.round((Number(document.getElementById(id).value) + amount + Number.EPSILON) * 100) / 100
}

function copydiffi() {
    document.getElementById("current").value = saveddiffi;
}