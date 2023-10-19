textinput = "(A and B or C) and D";
//∪ - Union | ∩ - iNtersection | ′ - prime
//′∪∩
textinput = textinput.replaceAll(/ and /gi,"∩")
textinput = textinput.replaceAll(/ or /gi,"∪")
textinput = textinput.replaceAll(/ /gi,"")
expectedoutput = "(A∩B)∪(C∩D)"
console.log(textinput)