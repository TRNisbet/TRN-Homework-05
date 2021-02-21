var currentTime = moment().format("HH");
var currentTimeInt = parseInt(currentTime);
var saveBtn = $(".saveBtn");

$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));
 
 retrive();

var currentDay = moment().format("dddd, MMMM Do");
     $("#currentDay").text(currentDay);

     for (var x = 1; x <= 12; x++) {
        var inputTime = $("#" + x + "Row").attr("data-time");
        var inputTimeInt = parseInt(inputTime);

         if (currentTimeInt === inputTimeInt){
            $("#" + x + "Row").addClass("present");
            
        }

                if (currentTimeInt > inputTimeInt){
            $("#" + x + "Row").addClass("past");
        }

         if (currentTimeInt < inputTimeInt){
            $("#" + x + "Row").addClass("future");
        }

    }

    saveBtn.on("click", function () {
         var hour = $(this).attr("data-hour");
           var plan = $("#" + hour + "Row").val();
            localStorage.setItem(hour, plan);
    });


   function retrive() {
        for (var i = 1; i <= 12; i++) {
            $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }


