const searchParams = new URLSearchParams(window.location.search);
const timezoneCode = {
    "E":"Europe/",
    "P":"Pacific/",
    "I":"Indian/",
    "U":"Australia/",
    "A":"Atlantic/",
    "M":"America/",
    "S":"Asia/",
    "T":"Antartica/",
    "F":"Africa/",
    "R":"Arctic/",
    "GP":"Etc/GMT+",
    "GM":"Etc/GMT-",
    "Z":"US/",
    "D":"Canada/",
}
const americanCodes = {
    "a":"Argentina/",
    "i":"Indiana/",
    "k":"Kentucky/",
    "d":"North_Dakota/",
}
const tzShortenings = {
    "ny":"America/New_York", //north america
    "la":"America/Los_Angeles",
    "ch":"America/Chicago",
    "to":"America/Toronto",
    "ca":"Africa/Cairo", //africa
    "ki":"Africa/Kinshasa",
    "lg":"Africa/Lagos",
    "jo":"Africa/Johannesburg",
    "lu":"Africa/Luanda",
    "da":"Africa/Dar_es_Salaam",
    "kh":"Africa/Khartoum",
    "ab":"Africa/Abidjan",
    "ad":"Africa/Addis_Ababa",
    "tk":"Asia/Tokyo", //asia
    "sh":"Asia/Shanghai",
    "ma":"Asia/Manila",
    "dh":"Asia/Dhaka",
    "ka":"Asia/Karachi",
    "cn":"Asia/Chongqing",
    "ais":"Asia/Istanbul", //europe (sorry, turkey is in asia according to the timezones)
    "eis":"Europe/Istanbul",
    "mo":"Europe/Moscow",
    "pa":"Europe/Paris",
    "lo":"Europe/London",
    "md":"Europe/Madrid",
    "be":"Europe/Berlin",
    "ro":"Europe/Rome",
    "at":"Europe/Athens",
    "me":"Australia/Melbourne", //oceania
    "sy":"Australia/Sydney",
    "br":"Australia/Brisbane",
    "pe":"Australia/Perth",
    "au":"Pacific/Auckland",
    "ae":"Australia/Adelaide",
    "ho":"Pacific/Honolulu",
    "cb":"Australia/Canberra",
    "sp":"America/Sao_Paulo", //south america
    "ba":"America/Buenos_Aires",
    "bo":"America/Bogota",
    "li":"America/Lima",
    "sa":"America/Santiago",
    "re":"America/Recife",
    "UTC":"u",
}

Base64 = {

    _Rixits :
//   0       8       16      24      32      40      48      56     63
//   v       v       v       v       v       v       v       v      v
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_",
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

let suffix = ""
if (searchParams.has('t')){
    let timezone = searchParams.get('t');
    ending = timezone.substring(1)
    if (timezone.charAt(0) == "M") {
        if (timezone.charAt(1) in americanCodes){
            ending = americanCodes[timezone.charAt(1)] + timezone.substring(2)
        }
    }
    timezone = timezoneCode[timezone.charAt(0)] + ending
    if (searchParams.get('t') in tzShortenings) {
        timezone = tzShortenings[searchParams.get('t')]
    }
    suffix += "?timezone="+timezone
} 
if (searchParams.has("s")) {
   try {
    let timestamp = searchParams.get('s');
    timestamp = Base64.toNumber(timestamp)
    suffix += "&timestamp="+timestamp
   }
   catch {
    console.warn("invalid timestamp")
   }
}
window.location.replace("http://ideot.xyz/tools/wedonthavethesametime.html"+suffix);