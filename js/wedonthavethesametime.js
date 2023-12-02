const searchParams = new URLSearchParams(window.location.search);
const timer = document.getElementById("time")
const currentDate = document.getElementById("date")
const timezoneCode = {
    "Europe":"E",
    "Pacific":"P",
    "Indian":"I",
    "Australia":"U",
    "Atlantic":"A",
    "America":"M",
    "Asia":"S",
    "Antartica":"T",
    "Africa":"F",
    "Arctic":"R",
    "Etc":"C"
}
const americanCodes = {
    "Argentina":"a",
    "Indiana":"i",
    "Kentucky":"k",
    "North_Dakota":"d",
}
var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
if (searchParams.has('timezone')){
    timezone = searchParams.get('timezone');
} else {
    searchParams.set('timezone',Intl.DateTimeFormat().resolvedOptions().timeZone)
    window.location.search = searchParams;
}

function shortlinkgenerator() {
    shortlink = ""
    firstSlash = timezone.indexOf("/")
    console.log(timezone.substring(0,firstSlash))
    continent = timezoneCode[timezone.substring(0,firstSlash)]
    secondSlash = timezone.lastIndexOf("/")
    americanCode = ""
    if (firstSlash != secondSlash) {
        console.log(timezone.substring(firstSlash + 1,secondSlash))
        americanCode = americanCodes[timezone.substring(firstSlash + 1,secondSlash)]
    }
    shortlink = "https://ideot.xyz/wdhtst?t=" + continent + americanCode + timezone.substring(secondSlash + 1)
    return shortlink
}


function copylink() {
    // Copy the text inside the text field
   navigator.clipboard.writeText(document.getElementById("shortlink").value);
 }

if (timezone == Intl.DateTimeFormat().resolvedOptions().timeZone) {
    document.getElementById("description").innerHTML = "since you live in the same timezone as the person who sent this (or because you are the same person), the current time for you (and maybe them) is:"
} else {
    document.getElementById("description").innerHTML = "right now, the time for the person who sent you this is:"
}
document.getElementById("shortlink").value = shortlinkgenerator()

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
}, 10);