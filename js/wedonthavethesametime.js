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
    "Etc":"G",
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
    shortlink = "https://ideot.xyz/wdhtst?t=" + continent + americanCode + timezone.substring(secondSlash + 1).replace("+","%2B")
    if (timezone in tzShortenings) {
        shortlink = "https://ideot.xyz/wdhtst?t=" + tzShortenings[timezone]
    }
    return shortlink
}


function copylink() {
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