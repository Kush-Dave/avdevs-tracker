let seconds = 0;               //Define vars to hold time values
let minutes = 0;
let hours = 0;

let displaySeconds = 0;        //Define vars to hold "display" value
let displayMinutes = 0;
let displayHours = 0;

let interval = null;           //Define var to hold setInterval() function

let status_ = "stopped";      //Define var to hold stopwatch status


//for first toggle button
function settimer()       
{
       document.getElementById('tog1-btn').classList.toggle('active');
        if(status_ === "stopped")
        {
           //Start the stopwatch (by calling the setInterval() function)
          interval = window.setInterval(stopWatch, 1000);   
          document.getElementById("startStop").innerHTML = "PAUSE";
          status_ = "started";
        }
       else    
        {
           window.clearInterval(interval);  //method clears a timer set of assigned to the interval
           document.getElementById("startStop").innerHTML = "RESUME";
           status_ = "stopped";
        }
}
   


function stopWatch(){     //Stopwatch function (logic to determine when to increment next value, etc.)
seconds++;                // incrementing seconds, bcz we call this fun then it should be incremented once p/s

//Logic to determine when to increment next value after seconds-->minutes-->hours = 00:00:60
if(seconds / 60 === 1){    
    seconds = 0;              //at that time it will bet set to 0
    minutes++;                // that's why minutes is shown to be incremented, so it becomes 00:01:00

    if(minutes / 60 === 1){
        minutes = 0;          // becuase we have to fit in hour 01:00:00
        hours++;              // Now hours is meant to be incremented
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

   function opentog() { 
        var x = document.getElementById("open");  //method returns an element with a specified value.
           if (x.style.display === "block"){
           x.style.display = "none";
           document.getElementById("display1").innerHTML = "Your total working hours are: " + displayHours + ":" + displayMinutes + ":" + displaySeconds;
           //test1.disable = true;
           } else {
            x.style.display = "block";
           }
   }
   
   function hidebtn() { 
        var x = document.getElementById("hide");
           if (x.style.display === "none") {
           x.style.display = "block";
           //test1.disable = true;
           } else {
            x.style.display = "none";
           }
   }


         
   

function startStp_onoff(){

   if(status_ === "stopped"){
      //Start the stopwatch for On / Off (by calling the setInterval() function)
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

function startStp_paures(){

     if(status_ === "stopped"){
       //Start the stopwatch for Pause / Resume (by calling the setInterval() function)
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

