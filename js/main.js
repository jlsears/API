'use strict';


//ASSIGNMENT:  write a function that pulls out the current temp after you add a zipcode to a form and hit submit.  It should then display the results in the html body. Apply some nice CSS.

$(document).ready(function() {

    var button = $("#search");

    var ipZip = $.get("http://ipinfo.io", function(response) {
            console.log(response.postal);
            $("#location").val(response.postal);
        }, "jsonp");

        function currentTemp(e) {
        e.preventDefault();
        var theZip = $("#location").val();
        var suffix = ".json";
        var base_url = "http://api.wunderground.com/api/6340c030b5c4c3a9/conditions/q/";
          console.log(base_url + theZip + suffix);
        $.ajax({
            url: base_url + theZip + suffix,
            dataType: "jsonp",
            success: function(data){
                console.log(data);
                $("#div3").append("For zipcode: " + theZip);
                $("#div2").append(data.current_observation.local_time_rfc822)
                $("#div4").append("The current temp for this zip code is ", data.current_observation.temperature_string);
                $("#div5").append("<img src='" + data.current_observation.icon_url +"'>");
            }
         })   

    }

    // $("#location").val(ipZip);
    
button.click(currentTemp);


});
// }
// // }

     //    $.ajax({
     //    url: base_url2 + zipEntered + suffix,
     //    dataType: "jsonp",
     //    success: function(data){
     //        console.log(data);
     //        $("#div2").append(data.forecast.weekday_short + " " + data.forecast.monthname_short + " " + data.forecast.day + " " + data.forecast.year);
     //    }
     // })        




