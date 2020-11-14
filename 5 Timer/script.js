
let nyDays    = 365;
let nyHours   = 23;
let nyMinutes = 59;
let nySeconds = 59;

currentDate  = new Date();
currentYear  = currentDate.getFullYear();
currentMonth = currentDate.getMonth(); 
currentDay   = currentDate.getDate(); 

function displayTime() { // get my Time and Date
    let time = new Date();
    let t = time.toLocaleTimeString();
    let d = "Current time: " + currentDay + "-" + currentMonth + "-" + currentYear; 
    document.getElementById("date").innerHTML = d;
    document.getElementById("time").innerHTML = t;
}

function refreshTime() { // Refresh my time
    time = setInterval(displayTime, 1000);
}

refreshTime();

function date365() { // DayOfYear from 0 to 365

    let date365 = 0;
    let monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];
    let leapYear = new Date(currentYear, 1, 29); 
    
    if (leapYear.getDate() == 29) { // If it's a leap year, changes 28 to 29
        monthLength[1] = 29;
    }

    for ( i=0; i < currentMonth; i++ ) { 
        date365 = date365 + monthLength[i];
    }
    date365 = date365 + currentDay;

    return date365
}

date365 = date365();

function updateCounter() { // time to New Year

    time =  new Date();
    d = - date365 + nyDays; 
    let day = (d < 10) ? "0" + d : d;
    h = - time.getHours() + nyHours;
    let hr = (h < 10) ? "0" + h : h;
    m = - time.getMinutes() + nyMinutes;
    let min = (m < 10) ? "0" + m : m;
    s = - time.getSeconds() + nySeconds + 1;
    let sec = (s < 10) ? "0" + s : s;

    return {
    day: day,
    hr: hr,
    min: min,
    sec: sec
    };
}

function getCounter() { // Counters to New Year

    const a = {day,hr,min,sec} = updateCounter();

    document.getElementById("days").innerHTML = a.day;
    document.getElementById("hours").innerHTML = a.hr;
    document.getElementById("minutes").innerHTML = a.min;
    document.getElementById("seconds").innerHTML = a.sec;
}

function refreshCounter(){ // Refresh Counters to New Year
    setInterval(getCounter, 1000);
}

refreshCounter();