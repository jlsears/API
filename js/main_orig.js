'use strict';

//What is the phase of the moon tonight?

function moonPhase() {
$.ajax({
   url: "http://api.wunderground.com/api/6340c030b5c4c3a9/astronomy/q/37210.json",
   dataType: "jsonp",
   success: function(data){
    console.log(data);
    console.log("The moon phase is ", data.moon_phase.phaseofMoon);
   }
});
}


moonPhase();


//In what year was the record low temperature for today's date?  use almanac
function recordLow() {
$.ajax({
    url:"http://api.wunderground.com/api/6340c030b5c4c3a9/almanac/q/37210.json",
    dataType: "jsonp",
    success: function(data){
        console.log(data);
        console.log("The lowest temp on record for today's date is ", data.almanac.temp_low.recordyear);
    }
})
}
recordLow();


//ASSIGNMENT:  write a function that pulls out the current temp after you add a zipcode to a form and hit submit.  It should then display the results in the html body. Apply some nice CSS.

function recordLow() {
$.ajax({
    url:"",
    dataType: "jsonp",
    success: function(data){
        console.log(data);
        console.log("The current temp for this zip code is ", );
    }
})
}
currentTemp();

