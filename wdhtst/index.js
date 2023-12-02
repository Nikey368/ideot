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
if (searchParams.has('t')){
    let timezone = searchParams.get('t');
    ending = timezone.substring(1)
    if (timezone.charAt(0) == "M") {
        if (timezone.charAt(1) in americanCodes){
            ending = americanCodes[timezone.charAt(1)] + timezone.substring(2)
        }
    }
    timezone = timezoneCode[timezone.charAt(0)] + ending
    window.location.replace("http://ideot.xyz/tools/wedonthavethesametime.html?timezone="+timezone);
} else {
    window.location.replace("http://ideot.xyz/tools/wedonthavethesametime.html");
}