function getNextDayOfWeek(date, dayOfWeek) {
    // Code to check that date and dayOfWeek are valid left as an exercise ;)

    var resultDate = new Date(date.getTime());

    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);

    console.log(resultDate)
    return resultDate;
}

const dateofwebpageopened = new Date()
const webpageopened = new Date().getTime()
var nextminute = Math.ceil(webpageopened / 60000) * 60000;
var nexthour = Math.ceil(webpageopened / 3600000) * 3600000;

let christmasYear = dateofwebpageopened.getFullYear();
let christmasDate = new Date(christmasYear, 11, 25);

let halloweenYear = dateofwebpageopened.getFullYear();
let halloweenDate = new Date(halloweenYear, 9, 31);

let birthdayYear = dateofwebpageopened.getFullYear();
let birthdayDate = new Date(birthdayYear, 11, 28);

if (dateofwebpageopened.getMonth() == 11 && dateofwebpageopened.getDate() >= 25) {
  christmasYear = christmasYear + 1;
  if (dateofwebpageopened.getDate() >= 28) {
    birthdayYear += 1;
  }
}

var nextfriday = getNextDayOfWeek(dateofwebpageopened,4)

let untilnextminute = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = nextminute
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("nextminute").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        nextminute = nextminute + 60000;
    }
}, 1000 );

let untilnexthour = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = nexthour
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("nexthour").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        nexthour = nexthour + 60000 * 60;
    }
}, 1000 );

let untilnextchristmas = setInterval(function() {

    // Get today's date and time!
    let now = new Date().getTime();
    let countDownDate = christmasDate.getTime();
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("nextchristmas").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        christmasYear += 1;
        christmasDate = new Date(christmasYear, 11, 25);
    }
}, 1000 );

let untilnexthalloween = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = halloweenDate.getTime();
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("nexthalloween").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        halloweenYear += 1;
        halloweenDate = new Date(halloweenYear, 9, 31);
    }
}, 1000 );

let untilnextbirthday = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = birthdayDate.getTime();
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("nextbirthday").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        birthdayYear += 1;
        birthdayDate = new Date(birthdayYear, 11, 25);
    }
}, 1000 );

let untilnextyear = setInterval(function() {

    // Get today's date and time
    let now = new Date()
    let countDownDate = new Date(now.getFullYear() + 1,0,1);
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now.getTime();;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("nextyear").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);
}, 1000 );

let untiltimeend = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = new Date(2147483648000);
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("timeend").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        document.getElementById("timeend").innerHTML = "COMPLETE";
    }
}, 1000 );

let untildrinkage = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = new Date(2027,11,28);
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("drinkage").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        document.getElementById("drinkage").innerHTML = "COMPLETE";
    }
}, 1000 );

let untilchriscount = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = new Date(2053,4,2);
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("chriscount").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        document.getElementById("chriscount").innerHTML = "COMPLETE";
    }
}, 1000 );

let untilthatonereallybigunix = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = new Date(9999999999999);
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("9999999999999unix").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        document.getElementById("9999999999999unix").innerHTML = "COMPLETE";
    }
}, 1000 );

let untiltransnational = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = new Date(1713016800000);
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("transnational").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        document.getElementById("transnational").innerHTML = "COMPLETE";
    }
}, 1000 );

let lastopened = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = webpageopened
      
    // Find the distance between now and the count down date
    let distance = now - countDownDate;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("lastopened").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        nexthour = nexthour + 60000 * 60;
    }
}, 1000 );

let sincemayaend = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = new Date(2012,11,21).getTime();
      
    // Find the distance between now and the count down date
    let distance = now - countDownDate;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("sincemayaend").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        document.getElementById("sincemayaend").innerHTML = "it seems you have time travelled to a time that was before this date. oopsies."
    }
}, 1000 );

let sincestart2020 = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = new Date(2020,0,1).getTime();
      
    // Find the distance between now and the count down date
    let distance = now - countDownDate;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("sincestart2020").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        document.getElementById("sincestart2020").innerHTML = "it seems you have time travelled to a time that was before this date. oopsies."
    }
}, 1000 );

let sincestart2000 = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = new Date(2000,0,1).getTime();
      
    // Find the distance between now and the count down date
    let distance = now - countDownDate;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("sincestart2000").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        document.getElementById("sincestart2000").innerHTML = "it seems you have time travelled to a time that was before this date. oopsies."
    }
}, 1000 );

let sincemoonlanding = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = new Date(14528580000).getTime();
      
    // Find the distance between now and the count down date
    let distance = now - countDownDate;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("sincemoonlanding").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        document.getElementById("sincemoonlanding").innerHTML = "it seems you have time travelled to a time that was before this date. oopsies."
    }
}, 1000 );

let sincetwosday = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = new Date(2022,1,22).getTime();
      
    // Find the distance between now and the count down date
    let distance = now - countDownDate;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("sincetwosday").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        document.getElementById("sincetwosday").innerHTML = "it seems you have time travelled to a time that was before this date. oopsies."
    }
}, 1000 );

let sincebirthday = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let countDownDate = new Date(2009,11,28).getTime();
      
    // Find the distance between now and the count down date
    let distance = now - countDownDate;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      
    // Output the result in an element with id="demo"
    document.getElementById("sincebirthday").innerHTML = days.toString().padStart(3,0) + ":" + hours.toString().padStart(2,0) + ":"
    + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    if (distance <= 0) {
        document.getElementById("sincebirthday").innerHTML = "it seems you have time travelled to a time that was before this date. oopsies."
    }
}, 1000 );

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}