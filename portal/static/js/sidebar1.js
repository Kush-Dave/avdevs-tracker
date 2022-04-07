let seconds1 = 0;               //Define vars to hold time values
let minutes1 = 0;
let hours1 = 0;

let displaySeconds1 = 0;        //Define vars to hold "display" value
let displayMinutes1 = 0;
let displayHours1 = 0;

let interval1 = null;           //Define var to hold setInterval() function

let status_ = "stopped";      //Define var to hold stopwatch status


//for first toggle button
function settimer()       
{
       document.getElementById('tog1-btn').classList.toggle('active');
        if(status_ === "stopped")
        {
           //Start the stopwatch (by calling the setInterval() function)
          interval1 = window.setInterval(stopWatch, 1000);   
          document.getElementById("startStop").innerHTML = "PAUSE";
          status_ = "started";
        }
       else    
        {
           window.clearInterval(interval1);  //method clears a timer set of assigned to the interval
           document.getElementById("startStop").innerHTML = "RESUME";
           status_ = "stopped";
        }
}
   


function stopWatch(){     //Stopwatch function (logic to determine when to increment next value, etc.)
seconds1++;                // incrementing seconds, bcz we call this fun then it should be incremented once p/s

//Logic to determine when to increment next value after seconds-->minutes-->hours = 00:00:60
if(seconds1 / 60 === 1){    
    seconds1 = 0;              //at that time it will bet set to 0
    minutes1++;                // that's why minutes is shown to be incremented, so it becomes 00:01:00

    if(minutes1 / 60 === 1){
        minutes1 = 0;          // becuase we have to fit in hour 01:00:00
        hours1++;              // Now hours is meant to be incremented
      }
 }

//If seconds/minutes/hours are only one digit, add a leading 0 to the value
  if(seconds1 < 10){         
     displaySeconds1 = "0" + seconds1.toString();
   }
   else{
     displaySeconds1 = seconds1;
   }

  if(minutes1 < 10){
    displayMinutes1 = "0" + minutes1.toString();
   }
  else{
    displayMinutes1 = minutes1;
   }

  if(hours1 < 10){
    displayHours1 = "0" + hours1.toString();
   }
   else{
     displayHours1 = hours1;
   }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours1 + ":" + displayMinutes1 + ":" + displaySeconds1;
}               

   function opentog() { 
        var x = document.getElementById("open");  //method returns an element with a specified value.
           if (x.style.display === "block"){
           x.style.display = "none";
           var totalworkhours = document.getElementById("displaytotal1").innerHTML = "Today's total hours of Working: " + displayHours1 + ":" + displayMinutes1 + ":" + displaySeconds1;
           console.log(totalworkhours);
           //test1.disable = true;
           } else {
            x.style.display = "block";
           }
   }
   
   function hidebtn() { 
        var x = document.getElementById("hide");
           if (x.style.display === "none") {
           x.style.display = "block";
           var totalbreakhours = document.getElementById("displaytotal2").innerHTML = "Today's total hours of Break: " + displayHours2 + ":" + displayMinutes2 + ":" + displaySeconds2;
           console.log(totalbreakhours);
           //test1.disable = true;
           } else {
            x.style.display = "none";
           }
   }


         
  
function startStp_onoff(){

   if(status_ === "stopped"){
      //Start the stopwatch for On / Off (by calling the setInterval() function)
      interval1 = window.setInterval(stopWatch, 1000);
      document.getElementById("startStop").innerHTML = "Pause";
      status_ = "started";
    }

    else{
       window.clearInterval(interval1);
       seconds1 = 0;
       minutes1 = 0;
       hours1 = 0;

       document.getElementById("startStop").innerHTML = "Start";
       document.getElementById("display").innerHTML = "00:00:00";
       status_ = "stopped";
      }            
}

function startStp_paures(){

     if(status_ === "stopped"){
       //Start the stopwatch for Pause / Resume (by calling the setInterval() function)
       interval1 = window.setInterval(stopWatch, 1000);
       document.getElementById("startStop").innerHTML = "Pause";
       status_ = "started";        
      }

    else{
       window.clearInterval(interval1);
       document.getElementById("startStop").innerHTML = "Resume";
       status_ = "stopped";
      }
}

//--------------------------------------------------SECOND BLOCK-------------------------------------------------//


let seconds2 = 0;               //Define vars to hold time values
let minutes2 = 0;
let hours2 = 0;

let displaySeconds2 = 0;        //Define vars to hold "display" value
let displayMinutes2 = 0;
let displayHours2 = 0;

var interval2 = null;           //Define var to hold setInterval() function

let status_1 = "stopped";      //Define var to hold stopwatch status


//for first toggle button
function settimer2()       
{
       document.getElementById('tog1-btn2').classList.toggle('active');
        if(status_1 === "stopped")
        {
           //Start the stopwatch (by calling the setInterval() function)
          interval2 = window.setInterval(stopWatch2, 1000);   
          document.getElementById("startStop2").innerHTML = "PAUSE";
          status_1 = "started";
        }
       else    
        {
           window.clearInterval(interval2);  //method clears a timer set of assigned to the interval
           document.getElementById("startStop2").innerHTML = "RESUME";
           status_1 = "stopped";
        }
}
   


function stopWatch2(){     //Stopwatch function (logic to determine when to increment next value, etc.)
seconds2++;                // incrementing seconds, bcz we call this fun then it should be incremented once p/s

//Logic to determine when to increment next value after seconds-->minutes-->hours = 00:00:60
if(seconds2 / 60 === 1){    
    seconds2 = 0;              //at that time it will bet set to 0
    minutes2++;                // that's why minutes is shown to be incremented, so it becomes 00:01:00

    if(minutes2 / 60 === 1){
        minutes2 = 0;          // becuase we have to fit in hour 01:00:00
        hours2++;              // Now hours is meant to be incremented
      }
 }

//If seconds/minutes/hours are only one digit, add a leading 0 to the value
  if(seconds2 < 10){         
     displaySeconds2 = "0" + seconds2.toString();
   }
   else{
     displaySeconds2 = seconds2;
   }

  if(minutes2 < 10){
    displayMinutes2 = "0" + minutes2.toString();
   }
  else{
    displayMinutes2 = minutes2;
   }

  if(hours2 < 10){
    displayHours2 = "0" + hours2.toString();
   }
   else{
     displayHours2 = hours2;
   }

    //Display updated time values to user
    document.getElementById("display5").innerHTML = displayHours2 + ":" + displayMinutes2 + ":" + displaySeconds2;
}               

   function opentog2() { 
        var z = document.getElementById("open2");  //method returns an element with a specified value.
           if (z.style.display5 === "block"){
           z.style.display5 = "none";
          // document.getElementById("displaytotal1").innerHTML = "Your total working hours are: " + displayHours2 + ":" + displayMinutes2 + ":" + displaySeconds2;
           //test1.disable = true;
           } else {
            z.style.display5 = "block";
           }
   }
   
   function hidebtn2() { 
        var z = document.getElementById("hide2");
           if (z.style.display5 === "none") {
           z.style.display5 = "block";
           //test1.disable = true;
         //  document.getElementById("displaytotal2").innerHTML = "Your total working break are: " + displayHours2 + ":" + displayMinutes2 + ":" + displaySeconds2;
           } else { 
            z.style.display5 = "none";
           }
   }


         
   function startStp_onoff2(){

    if(status_1 === "stopped"){
       //Start the stopwatch for On / Off (by calling the setInterval() function)
       interval2 = window.setInterval(stopWatch2, 1000);
       document.getElementById("startStop2").innerHTML = "Pause";
       status_1 = "started";
     }
 
     else{
        window.clearInterval(interval2);
        document.getElementById("startStop2").innerHTML = "Resume";
        status_1 = "stopped";
       }  

 }
 
 function startStp_paures2(){
 
      if(status_1 === "stopped"){
        //Start the stopwatch for Pause / Resume (by calling the setInterval() function)
        interval2 = window.setInterval(stopWatch2, 1000);
        document.getElementById("startStop2").innerHTML = "Pause";
        status_1 = "started";        
       }
 
     else{
        window.clearInterval(interval2);
        document.getElementById("startStop2").innerHTML = "Resume";
        status_1 = "stopped";
       }
}



