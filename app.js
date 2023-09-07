function clock () {            
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.querySelector("#hour").innerHTML = hours;
    document.querySelector("#minute").innerHTML = minutes;
    document.querySelector("#second").innerHTML = seconds;
}

// clock
let updateClock = setInterval(clock, 1000);

hours = hours > 12 ? hours % 12 : hours;        // TO JEST NIE ZDEFINIOWANE ??? 

if (hours < 10) {          // TUTAJ ZERA PRZED NIE WIDAĆ JAK JEST < 10 CHOLIPKA :<
    hours = "0" + hours;
}

if (minutes < 10) {
    minutes = "0" + minutes;
}

updateClock();

// data
 let today = new Date();
 let dayNumber = today.getDate();
 let yearNumber = today.getFullYear();
 let dayName = today.toLocaleString("default", {weekday: "long"});
 let monthName = today.toLocaleString("default", {month: "short"});

 document.querySelector("#day").innerHTML = dayName;
 document.querySelector("#day-number").innerHTML = dayNumber;
 document.querySelector("#month").innerHTML = monthName;
 document.querySelector("#year").innerHTML = yearNumber;