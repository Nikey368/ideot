const searchParams = new URLSearchParams(window.location.search);
const timer = document.getElementById("time")
const currentDate = document.getElementById("date")
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
}
const americanCodes = {
    "Argentina":"a",
    "Indiana":"i",
    "Kentucky":"k",
    "North_Dakota":"d",
}
const tzShortenings = {
    "America/New_York":"ny", //north america
    "America/Los_Angeles":"la",
    "America/Chicago":"ch",
    "America/Toronto":"to",
    "Africa/Cairo":"ca", //africa
    "Africa/Kinshasa":"ki",
    "Africa/Lagos":"lg",
    "Africa/Johannesburg":"jo",
    "Africa/Luanda":"lu",
    "Africa/Dar_es_Salaam":"da",
    "Africa/Khartoum":"kh",
    "Africa/Abidjan":"ab",
    "Africa/Addis_Ababa":"ad",
    "Asia/Tokyo":"tk", //asia
    "Asia/Shanghai":"sh",
    "Asia/Manila":"ma",
    "Asia/Dhaka":"dh",
    "Asia/Karachi":"ka",
    "Asia/Chongqing":"cn",
    "Asia/Istanbul":"ais", //europe (sorry, turkey is in asia according to the timezones)
    "Europe/Istanbul":"eis",
    "Europe/Moscow":"mo",
    "Europe/Paris":"pa",
    "Europe/London":"lo",
    "Europe/Madrid":"md",
    "Europe/Berlin":"be",
    "Europe/Rome":"ro",
    "Europe/Athens":"at",
    "Australia/Melbourne":"me", //oceania
    "Australia/Sydney":"sy",
    "Australia/Brisbane":"br",
    "Australia/Perth":"pe",
    "Pacific/Auckland":"au",
    "Australia/Adelaide":"ae",
    "Pacific/Honolulu":"ho",
    "Australia/Canberra":"cb",
    "America/Sao_Paulo":"sp", //south america
    "America/Buenos_Aires":"ba",
    "America/Bogota":"bo",
    "America/Lima":"li",
    "America/Santiago":"sa",
    "America/Recife":"re",
    "UTC":"u",
}
var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
if (searchParams.has('timezone')){
    timezone = searchParams.get('timezone');
} else {
    searchParams.set('timezone',Intl.DateTimeFormat().resolvedOptions().timeZone)
    window.location.search = searchParams;
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

let currentTime = new Date(Date.now())
document.getElementById("year").value = currentTime.getFullYear()
document.getElementById("month").value = currentTime.getMonth() + 1
document.getElementById("day").value = currentTime.getDate()
document.getElementById("hour").value = currentTime.getHours()
document.getElementById("minute").value = currentTime.getMinutes()
document.getElementById("second").value = currentTime.getSeconds()
document.getElementById("milli").value = currentTime.getMilliseconds()

let timestamp = setTimestamp()

function shortlinkgenerator(custom) {
    shortlink = ""
    firstSlash = timezone.indexOf("/")
    //console.log(timezone.substring(0,firstSlash))
    continent = timezoneCode[timezone.substring(0,firstSlash)]
    secondSlash = timezone.lastIndexOf("/")
    americanCode = ""
    if (firstSlash != secondSlash) {
        //console.log(timezone.substring(firstSlash + 1,secondSlash))
        americanCode = americanCodes[timezone.substring(firstSlash + 1,secondSlash)]
    }
    shortlink = "https://ideot.xyz/wdhtst?t=" + continent + americanCode + timezone.substring(secondSlash + 1).replace("+","%2B")
    if (timezone in tzShortenings) {
        shortlink = "https://ideot.xyz/wdhtst?t=" + tzShortenings[timezone]
    }
    if (custom == "timestamp") {
        shortlink += "&s="+Base64.fromNumber(Date.now())
    } else if (custom == "custom") {
        shortlink += "&s="+Base64.fromNumber(timestamp)
    }
    return shortlink
}

function warp() {
    window.location.replace("http://ideot.xyz/tools/wedonthavethesametime.html?timezone="+document.getElementById("timezone").value)
}

function copylink(id) {
   navigator.clipboard.writeText(document.getElementById(id).value);
 }

if (timezone == Intl.DateTimeFormat().resolvedOptions().timeZone) {
    document.getElementById("description").innerHTML = "since you live in the same timezone as the person who sent this (or because you are the same person), the current time for you (and maybe them) is:"
} else {
    document.getElementById("description").innerHTML = "right now, the time for the person who sent you this is:"
}
document.getElementById("shortlink").value = shortlinkgenerator()

function setTimestamp() {
    return new Date(
        Number(document.getElementById("year").value),
        Number(document.getElementById("month").value)-1,
        Number(document.getElementById("day").value),
        Number(document.getElementById("hour").value),
        Number(document.getElementById("minute").value),
        Number(document.getElementById("second").value),
        Number(document.getElementById("milli").value),
    )
}

if (searchParams.has('timestamp')){
    let linkTimestamp = new Date(searchParams.get('timestamp'))
    document.getElementById("description").innerHTML = "the person that sent you this added a timestamp for " + linkTimestamp.toString() + " - in your timezone that's: "
    let options = {
        timeZone: timezone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric', 
        hour12: true,
      },
      formatter = new Intl.DateTimeFormat(navigator.language, options);
    let dateOptions = {
          timeZone: timezone,
          weekday: 'short',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          timeZoneName: "short",
        },
        formatter2 = new Intl.DateTimeFormat(navigator.language, dateOptions);
    timer.innerHTML = formatter.format(linkTimestamp)
    currentDate.innerHTML = formatter2.format(linkTimestamp)
    timestamp = setTimestamp()
    document.getElementById("shorttimestamplink").value = shortlinkgenerator("timestamp")
    document.getElementById("customlink").value = shortlinkgenerator("custom")
} else {
    console.log("all good")
    setInterval(function() {
        let options = {
            timeZone: timezone,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric', 
            hour12: true,
          },
          formatter = new Intl.DateTimeFormat(navigator.language, options);
        let dateOptions = {
              timeZone: timezone,
              weekday: 'short',
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              timeZoneName: "short",
            },
            formatter2 = new Intl.DateTimeFormat(navigator.language, dateOptions);
        timer.innerHTML = formatter.format(new Date())
        currentDate.innerHTML = formatter2.format(new Date())
        timestamp = setTimestamp()
        document.getElementById("shorttimestamplink").value = shortlinkgenerator("timestamp")
        document.getElementById("customlink").value = shortlinkgenerator("custom")
    }, 1);
    console.log(":D")
}

