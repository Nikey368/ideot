var characters = [
    "ichika",
    "saki",
    "honami",
    "shiho",
    "minori",
    "haruka",
    "airi",
    "shizuku",
    "kohane",
    "an",
    "akito",
    "toya",
    "tsukasa",
    "emu",
    "nene",
    "rui",
    "kanade",
    "mafuyu",
    "ena",
    "mizuki"
]
var charProperties = {
    "ichika":{color:"#33aaee"},
    "saki":{color:"#ffdd45"},
    "honami":{color:"#ee6666"},
    "shiho":{color:"#bbde22"},
    "minori":{color:"#ffcdac"},
    "haruka":{color:"#99cdff"},
    "airi":{color:"#ffa9cc"},
    "shizuku":{color:"#9aeede"},
    "kohane":{color:"#ff679a"},
    "an":{color:"#00bbdc"},
    "akito":{color:"#ff7721"},
    "toya":{color:"#0077dd"},
    "tsukasa":{color:"#ffbb00"},
    "emu":{color:"#ff66bc"},
    "nene":{color:"#34dd9a"},
    "rui":{color:"#bb88ed"},
    "kanade":{color:"#bb6588"},
    "mafuyu":{color:"#8889cc"},
    "ena":{color:"#ccaa87"},
    "mizuki":{color:"#e4a8ca"}
}
var table = document.getElementById("voteTable");
var headers  = 
`
<tr>
    <th>character</th>
    <th>ranking</th>
    <th>approval</th>
</tr>
`

Base64 = {

    _Rixits :
//   0       8       16      24      32      40      48      56     63
//   v       v       v       v       v       v       v       v      v
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    // You have the freedom, here, to choose the glyphs you want for 
    // representing your base-64 numbers. The ASCII encoding guys usually
    // choose a set of glyphs beginning with ABCD..., but, looking at
    // your update #2, I deduce that you want glyphs beginning with 
    // 0123..., which is a fine choice and aligns the first ten numbers
    // in base 64 with the first ten numbers in decimal.

    // This cannot handle negative numbers and only works on the 
    //     integer part, discarding the fractional part.
    // Doing better means deciding on whether you're just representing
    // the subset of javascript numbers of twos-complement 32-bit integers 
    // or going with base-64 representations for the bit pattern of the
    // underlying IEEE floating-point number, or representing the mantissae
    // and exponents separately, or some other possibility. For now, bail
    fromNumber : function(number) {
        if (isNaN(Number(number)) || number === null ||
            number === Number.POSITIVE_INFINITY)
            throw "The input is not valid";
        if (number < 0)
            throw "Can't represent negative numbers now";

        var rixit; // like 'digit', only in some non-decimal radix 
        var residual = Math.floor(number);
        var result = '';
        while (true) {
            rixit = residual % 64
            // console.log("rixit : " + rixit);
            // console.log("result before : " + result);
            result = this._Rixits.charAt(rixit) + result;
            // console.log("result after : " + result);
            // console.log("residual before : " + residual);
            residual = Math.floor(residual / 64);
            // console.log("residual after : " + residual);

            if (residual == 0)
                break;
            }
        return result;
    },

    toNumber : function(rixits) {
        var result = 0;
        // console.log("rixits : " + rixits);
        // console.log("rixits.split('') : " + rixits.split(''));
        rixits = rixits.split('');
        for (var e = 0; e < rixits.length; e++) {
            // console.log("_Rixits.indexOf(" + rixits[e] + ") : " + 
                // this._Rixits.indexOf(rixits[e]));
            // console.log("result before : " + result);
            result = (result * 64) + this._Rixits.indexOf(rixits[e]);
            // console.log("result after : " + result);
        }
        return result;
    }
} // reb.cabin and oka from stack overflow https://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript

const voterId = Base64.fromNumber(Date.now() - 1000000000000)
document.getElementById("voterID").innerHTML = `(voter id: #${voterId})`
document.getElementById("redirectLink").value = "https://ideot.xyz/forms/thanksforvoting.html?id="+voterId

function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sortTable() {
    var rows, switching, i, x, y, selectx, selecty, shouldSwitch;
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("td")[1];
        y = rows[i + 1].getElementsByTagName("td")[1];
        selectx = x.getElementsByTagName("select")[0];
        selecty = y.getElementsByTagName("select")[0];
        //check if the two rows should switch place:
        if (Number(selectx.value) > Number(selecty.value) || (selectx.value == "-" && selectx.value != selecty.value)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

shuffleArray(characters)

table.innerHTML += headers

characters.forEach(char => {
    let template = `
<tr>
    <td style='color:${charProperties[char].color};'><b>${char}</b></td>
    <td>
         <select name="$${char}">
            <option disabled selected>-</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
        </select>
    </td>
    <td><input name="$approval-${char}" class="checkboxes" type="checkbox"></td>
</tr>
`
table.innerHTML += template
});

var selects = document.querySelectorAll("select")
var oldVal = {}

var selOpts = document.querySelectorAll("option")

function resetOptionClasses() {
    let selectedVals = []
    selects.forEach(uniqSel => {
        if (uniqSel.value != "-") {
            selectedVals.push(uniqSel.value)
        }
    });
    selOpts.forEach(opt => {
        opt.className = ""
        if (selectedVals.includes(opt.innerHTML)) {
            opt.className = "chosen"
        }
    })
}


selects.forEach(selElem => {
    oldVal[selElem.parentElement.parentElement.getElementsByTagName("td")[0].innerHTML] = selElem.value;
    selElem.addEventListener("change",function(e) {
        let allSet = false
        selects.forEach(uniqSel => {
            if (selElem.value == uniqSel.value && selElem != uniqSel) {
                let optIndex = Number(oldVal[selElem.parentElement.parentElement.getElementsByTagName("td")[0].innerHTML])
                optIndex = isNaN(optIndex) ? 0 : optIndex;
                uniqSel.options[optIndex].selected = 'selected';
                oldVal[uniqSel.parentElement.parentElement.getElementsByTagName("td")[0].innerHTML] = uniqSel.value;
            }
            allSet = !allSet ? (uniqSel.value == "-") : true
        });
        oldVal[selElem.parentElement.parentElement.getElementsByTagName("td")[0].innerHTML] = selElem.value;
        sortTable()
        let setToTrueOrFalse = selElem.parentElement.parentElement.getElementsByTagName("td")[2].getElementsByTagName("input")[0].checked;
        checkboxes.forEach(uniqCB => {
            let uniqCBValue = uniqCB.parentElement.parentElement.getElementsByTagName("td")[1].getElementsByTagName("select")[0].value;
            uniqCBValue = isNaN(uniqCBValue) ? 0 : uniqCBValue;
            if (Number(uniqCBValue) > Number(selElem.value)) {
                if (uniqCB.checked) {
                    setToTrueOrFalse = true;
                }
            }
        });
        resetOptionClasses()
        selElem.parentElement.parentElement.getElementsByTagName("td")[2].getElementsByTagName("input")[0].checked = setToTrueOrFalse;
        selElem.parentElement.parentElement.className = selElem.value != "-" ? "resolved" : ""
        selElem.parentElement.parentElement.className = setToTrueOrFalse ? " checked" : selElem.parentElement.parentElement.className
        document.getElementById("submitButton").disabled = allSet;
    })
});

var checkboxes = document.querySelectorAll(".checkboxes")

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change",function(e){
        let cbValue = checkbox.parentElement.parentElement.getElementsByTagName("td")[1].getElementsByTagName("select")[0].value;
        if (!isNaN(Number(cbValue))){
            checkboxes.forEach(uniqCB => {
                let uniqCBValue = uniqCB.parentElement.parentElement.getElementsByTagName("td")[1].getElementsByTagName("select")[0].value;
                if (!isNaN(Number(uniqCBValue))) {
                    if (checkbox.checked) {
                        if (Number(uniqCBValue) < Number(cbValue)) {
                            uniqCB.checked = true;
                        }
                    } else {
                        if (Number(uniqCBValue) > Number(cbValue)) {
                            uniqCB.checked = false;
                        }
                    }
                }
                uniqCB.parentElement.parentElement.className = uniqCBValue != "-" ? " resolved" : ""
                uniqCB.parentElement.parentElement.className = uniqCB.checked ? "checked" : uniqCB.parentElement.parentElement.className
            });
        }
        checkbox.parentElement.parentElement.className = cbValue != "-" ? " resolved" : ""
        checkbox.parentElement.parentElement.className = checkbox.checked ? "checked" : checkbox.parentElement.parentElement.className
    })
});
