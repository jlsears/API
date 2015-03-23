'use strict';


//ASSIGNMENT:  write a function that pulls out the current temp after you add a zipcode to a form and hit submit.  It should then display the results in the html body. Apply some nice CSS.

$(document).ready(function() {

    var button = $("#search");

    function currentTemp(e) {
        e.preventDefault();
        var zipEntered = $("#location").val();
        console.log(zipEntered);
        var suffix = ".json";
        var base_url = "http://api.wunderground.com/api/6340c030b5c4c3a9/conditions/q/";
        var base_url2 = "http://api.wunderground.com/api/6340c030b5c4c3a9/forecast/q";
        // var new_url = base_url + zipEntered + 
        // for (var i = 0; i < location.length; i++) {

            // if(location.length === 5) {
          console.log(base_url + zipEntered + suffix);
        $.ajax({
            url: base_url + zipEntered + suffix,
            dataType: "jsonp",
            success: function(data){
                console.log(data);
                var firstTemp = data.current_observation.local_time_rfc822;
                //$("#div2").append(data.current_observation.local_time_rfc822.slice(0, -5));
                $("#div3").append("For zipcode: " + zipEntered);
                $("#div4").append("The current temp for this zip code is ", data.current_observation.temperature_string);
                $("#div5").append("<img src='" + data.current_observation.icon_url +"'>");
            }
         })   

             $.ajax({
        url: base_url2 + zipEntered + suffix,
        dataType: "jsonp",
        success: function(data2){
            console.log(data);
            $("#div2").append(data.forecast.weekday_short + data.forecast.monthname_short + data.forecast.day + data.forecast.year);
        }
     })        
    }
    button.click(currentTemp);

});
// }
// // }





