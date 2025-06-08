var typeInput = document.getElementById("inputType")
var numberInput = document.getElementById("input")

var inputType = "none"

var errorLabel = document.getElementById("error")

var output = document.getElementById("output")

console.log(0.2 + 0.1)

function inputError(reason) {
    errorLabel.innerHTML = "ERROR: " + reason
    errorLabel.classList = "error"
}

function changeInputType() {
    inputType = typeInput.value
    document.getElementById("scientific").hidden = inputType != "scientific"
    document.getElementById("percentage").hidden = inputType != "percentage"
    document.getElementById("fractional").hidden = inputType != "fractional"
    errorLabel.classList = "noerror"
}

function compare() {
    output.innerHTML = ""
    errorLabel.classList = "noerror"
    let number = Decimal(numberInput.value)
    console.log(inputType)
    let success = true
    switch (inputType) {
        case "null":
            success = false
            inputError("select an input type, dummy")
            break
        case "raw":
            if (number.greaterThan(1) || number.lessThan(0)) {
                success = false
                inputError("number must be between 0 and 1 (inclusive)")
            }
            break
        case "scientific":
            let expanded = Decimal(number).times(Decimal(10).pow(document.getElementById("exponent").value.toString()))
            if (expanded.greaterThan(1) || expanded.lessThan(0)) {
                success = false
                inputError("number must be between 0 and 1 (current number evaluates to " + expanded + ")")
            }
            number = Decimal(number.toString() + "e" + document.getElementById("exponent").value)
            break
        case "percentage":
            if (number.greaterThan(100) || number.lessThan(0)) {
                success = false
                inputError("number must be between 0% and 100% (inclusive)")
            } else {
                number = number.div(100)
            }
            break
        case "fractional":[]
            if (number.lessThan(1)) {
                success = false
                inputError("denominator must not be below 1")
            } else {
                number = Decimal(1).div(number)
            }
            break
    }
    if (!success) {return}
    document.getElementById("outputLabel").innerHTML = `You inputted ${number.toString()}, which is equal to roughly ${number.times(100).toFixed(2,7)}% or about a 1 in ${Decimal(1).div(number).toFixed(0,7)} chance. But, what exactly does that probability MEAN?`
    if (number.eq(1)) {
        output.innerHTML += `<p>A chance of 1 is literally the same as a guaranteed outcome. So, yeah. It has a 100% chance of happening, like the chance that you'll roll a number higher than 0 on a standard d6. It's guaranteed. I'm not sure what more you want from me.</p>`
        return
    } else if (number.eq(0)) {
        output.innerHTML += `<p>If a chance is equal to 0, then it's impossible to happen. And I don't just mean pratically impossible, I mean literally impossible.</p>`
        return
    } else if (number.eq(0.5)) {
        output.innerHTML += `<p>0.5 is a coin flip. If I flip a coin, there's a 0.5 chance it's heads and 0.5 it's tails. It's 50/50.</p>`
        return
    }

    if (number.lessThan(0.5)) {
        output.innerHTML += `<p>For any given coin there is a 0.5 chance it'll land on heads. There is also a 0.25 chance it'll land on heads twice in a row. To calculate this, it's a simple <span>0.5<sup><i>n</i></sup></span>, where <i>n</i> is equal to amount of consecutive heads you're calculating. In regards to your input, you are ${number.log(0.5).mod(1) == 0 ? "just as" : "more"} likely to flip heads ${number.log(0.5).floor()} times in a row (${Decimal(0.5).pow(number.log(0.5).floor()).toString()}) ${number.log(0.5).mod(1) == 0 ? "as for your probability to succeed once." : "than your probability succeeding once."}<p>`
    }
    if (number.eq(Decimal(1).div(6))) {
        output.innerHTML += `<p>1 in 6 is equal to the chance of rolling a six on a d6, a six sided die.</p>`
    }
    if (number.lessThanOrEqualTo( Decimal('40').div('2598960') )) {
        output.innerHTML += `<p>In poker, there are exactly 2598960 unique hands. Of those hands, 40 of them are straight flushes (5 cards that are consecutive and are of the same suit). This means there's a 1 in 64974 chance of drawing a straight flush in a simple game like <a href='https://en.wikipedia.org/wiki/Five-card_draw'>five card draw poker</a>. Compared to your odds, however, you are ${number.log( Decimal('40').div('2598960') ).mod(1) == 0 ? "just as" : "more"} likely to draw a straight flush ${number.log( Decimal('40').div('2598960') ).floor() > 1 ? number.log( Decimal('40').div('2598960') ).floor() + " times in a row " : ""}(${Decimal( Decimal('40').div('2598960') ).pow(number.log( Decimal('40').div('2598960') ).floor()).toString()}) ${number.log( Decimal('40').div('2598960') ).mod(1) == 0 ? "as for your probability to succeed once." : "than your probability succeeding once."}</p>`
    }
    if (number.lessThanOrEqualTo( Decimal('4').div('2598960') )) {
        output.innerHTML += `<p>In poker, there are exactly 2598960 unique hands. Of those hands, 4 of them are royal flushes (10,J,Q,K,A all same suit). This means there's a 1 in 649740 chance of drawing a royal flush in a simple game like <a href='https://en.wikipedia.org/wiki/Five-card_draw'>five card draw poker</a>. Compared to your odds, however, you are ${number.log( Decimal('4').div('2598960') ).mod(1) == 0 ? "just as" : "more"} likely to draw a royal flush ${number.log( Decimal('4').div('2598960') ).floor() > 1 ? number.log( Decimal('4').div('2598960') ).floor() + " times in a row " : ""}(${Decimal( Decimal('4').div('2598960') ).pow(number.log( Decimal('4').div('2598960') ).floor()).toString()}) ${number.log( Decimal('4').div('2598960') ).mod(1) == 0 ? "as for your probability to succeed once." : "than your probability succeeding once."}</p>`
    }
    if (number.lessThanOrEqualTo( Decimal('27.75').div('331449281') )) {
        output.innerHTML += `<p><a href='https://www.cdc.gov/lightning/data-research/index.html'>According to the US CDC</a> 444 people were struck by lightning from 2006 through 2021. This means roughly 28 people are struck by lightning every year. In 2020, the <a href='https://www.census.gov/programs-surveys/decennial-census/decade.2020.html'>US population was roughly 331.4 million</a>. This means, for any given year, there's roughly a <span><abbr title="in fractional form, that number is 27.75 / 33144928">8.37232168 × 10<sup>-8</sup></abbr></span> chance you'll be struck by lightning (assuming the US' data is roughly same everywhere else). Compared to your odds, however, you are ${number.log(Decimal('27.75').div('331449281')).mod(1) == 0 ? "just as" : "more"} likely to get struck by lightning ${number.log(Decimal('27.75').div('331449281')).floor() > 1 ? number.log(Decimal('27.75').div('331449281')).floor() + " times in one year " : ""}(${Decimal(Decimal('27.75').div('331449281')).pow(number.log(Decimal('27.75').div('331449281')).floor()).toString()}) ${number.log(Decimal('27.75').div('331449281')).mod(1) == 0 ? "as for your probability to succeed once." : "than your probability succeeding once."}</p>`
    }
    if (number.lessThanOrEqualTo(Decimal('1.472782').times(Decimal(10).pow(-15)))) {
        output.innerHTML += `<p><a href='https://archive.org/details/dream_investigation_results/page/22/mode/1up'>Dream's combined odds</a> (without factoring in bias) was calculated by the Minecraft speedrun.com team to be about <span>1.472782 × 10<sup>-15</sup></span>. But compared to your odds, you are more likely to get dream's odds than for your probability to succeed.</p>`
    }
}

changeInputType()