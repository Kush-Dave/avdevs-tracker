let seconds = 0;               //Define vars to hold time values
let minutes = 0;
let hours = 0;
let displaySeconds = 0;        //Define vars to hold "display" value
let displayMinutes = 0;
let displayHours = 0;
let interval = null;           //Define var to hold setInterval() function
let status_ = "stopped";      //Define var to hold stopwatch status

//For turning the timer on/off & pause/resume buttons.
function settimer() {
    document.getElementById('tog-btn').classList.toggle('active');
    if(status_ === "stopped") {
        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "PAUSE";
        status_ = "started";                  
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "RESUME";
        status_ = "stopped";
    }
}

function stopWatch(){         //Stopwatch function (logic to determine when to increment next value, etc.)
    seconds++;                
    if(seconds / 60 === 1){   //Logic to determine when to increment next value
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
     }
    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }
    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}
// To hide the start/stop button when paused.
function hideb() { 
    var x = document.getElementById("open");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
function hidebtn() { 
     var x = document.getElementById("hide");
     if (x.style.display === "none") {
         x.style.display = "block";
     } else {
        x.style.display = "none";
     }
}

function startStop(){
     if(status_ === "stopped"){
     //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Pause";
         status_ = "started";
        
        }

    else{
        window.clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        
        document.getElementById("startStop").innerHTML = "Start";
         document.getElementById("display").innerHTML = "00:00:00";
        status_ = "stopped";
         }
}

function pauseResume(){

    if(status_ === "stopped"){
     //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Pause";
        status_ = "started";
        }

    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Resume";
        status_ = "stopped";
        }
}

