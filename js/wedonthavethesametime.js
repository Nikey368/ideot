const searchParams = new URLSearchParams(window.location.search);
const timer = document.getElementById("time")
const currentDate = document.getElementById("date")
var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
if (searchParams.has('timezone')){
    timezone = searchParams.get('timezone');
} else {
    searchParams.set('timezone',Intl.DateTimeFormat().resolvedOptions().timeZone)
    window.location.search = searchParams;
}

if (timezone == Intl.DateTimeFormat().resolvedOptions().timeZone) {
    document.getElementById("description").innerHTML = "since you live in the same timezone as the person who sent this (or because you are the same person), the current time for you (and maybe them) is:"
} else {
    document.getElementById("description").innerHTML = "right now, the time for the person who sent you this is:"
}

setInterval(function() {
    let options = {
        timeZone: timezone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      },
      formatter = new Intl.DateTimeFormat(navigator.language, options);
    let dateOptions = {
          timeZone: timezone,
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          timeZoneName: "short",
        },
        formatter2 = new Intl.DateTimeFormat(navigator.language, dateOptions);
    timer.innerHTML = formatter.format(new Date())
    currentDate.innerHTML = formatter2.format(new Date())
}, 10);