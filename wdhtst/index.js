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
    "C":"Etc/"
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
}
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
    window.location.replace("http://ideot.xyz/tools/wedonthavethesametime.html?timezone="+timezone);
} else {
    window.location.replace("http://ideot.xyz/tools/wedonthavethesametime.html");
}