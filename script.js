var countdown = new Date ("dec 1, 2024,10:30:00").getTime();
var x  = setInterval(function(){
    var now = new Date ().getTime();
    var distance = countdown - now;
    var days = Math.floor(distance / (1000*60*60*24)); // For counting days
    var hours = Math.floor ((distance %(1000*60*60*24)) / (1000*60*60)); //for counting hours
    var minutes = Math.floor ((distance %(1000*60*60)) / (1000*60)); // for counting minutes
    var seconds = Math.floor ((distance %(1000*60)) / 1000) ;  // for counting seconds

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
   
    if (distance < 0 ){
        clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    }
},1000);