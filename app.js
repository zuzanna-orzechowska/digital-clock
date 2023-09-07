// clock
function clock () {            
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.querySelector("#hour").innerHTML = hours;
    document.querySelector("#minute").innerHTML = minutes;
    document.querySelector("#second").innerHTML = seconds;

    hours = hours > 12 ? hours % 12 : hours;
    
    hours = hours < 10 ? `0${hours}` : hours;       // CZEMU MI TO ZERO NIE POKAZUJE RATUNKU ;/
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds; 
}

let updateClock = setInterval(clock, 1000);

// date
 let today = new Date();
 let dayNumber = today.getDate();
 let yearNumber = today.getFullYear();
 let dayName = today.toLocaleString("en-US", {weekday: "long"});
 let monthName = today.toLocaleString("en-US", {month: "short"});

 document.querySelector("#day").innerHTML = dayName;
 document.querySelector("#day-number").innerHTML = dayNumber;
 document.querySelector("#month").innerHTML = monthName;
 document.querySelector("#year").innerHTML = yearNumber;