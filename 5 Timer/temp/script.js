
var myVar = setInterval(myTime, 1000);

function myTime() {
    var time = new Date();
    var t = time.toLocaleTimeString();
    var d = "Current time: " + time.getDate() + "-" + time.getMonth() + "-" + time.getFullYear(); 
    document.getElementById("date").innerHTML = d;
    document.getElementById("time").innerHTML = t;
  }

var nyDays    = 365;
var nyHours   = 23;
var nyMinutes = 59;
var nySeconds = 59;

function updateCounter() {
//  Код з https://stackoverflow.com/a/26426761
var date365 = 0;

var currentDate  = new Date();
var currentYear  = currentDate.getFullYear();
var currentMonth = currentDate.getMonth(); 
var currentDay   = currentDate.getDate(); 

var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];

var leapYear = new Date(currentYear, 1, 29); 
if (leapYear.getDate() == 29) { // If it's a leap year, changes 28 to 29
    monthLength[1] = 29;
}

for ( i=0; i < currentMonth; i++ ) { 
    date365 = date365 + monthLength[i];
}
date365 = date365 + currentDay;
// 

time =  new Date();
d = - date365 + nyDays;
hr = - time.getHours() + nyHours;
min = - time.getMinutes() + nyMinutes;
sec = - time.getSeconds() + nySeconds;

    return {
    d: d,
    hr: hr,
    min: min,
    sec: sec
    };
}

function getCounter() {

const a = {d,hr,min,sec} = updateCounter();

document.getElementById("days").innerHTML = a.d;
document.getElementById("hours").innerHTML = a.hr;
document.getElementById("minutes").innerHTML = a.min;
document.getElementById("seconds").innerHTML = a.sec;
}

setInterval(getCounter, 1000);
