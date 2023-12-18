//To make sure that the function is called once all the DOM elements of the page are ready to be used.
$(function(){
  console.log("Ready");
});

//To add todayd date and get currentHour
var today=dayjs();
  $("#currentDay").text(today.format("MMM D,YYYY"));
var currentHour=today.format("HH");


//Create present, past or future class names for for the fields based on currenHour.
$(".time-block").each(function() {
  var timeBlock=$(this).attr("id").split("-")[1];

if (timeBlock==currentHour){
  $(this).addClass("present");
  $(this).children(".description").addClass("present");

}


else if(timeBlock<currentHour){
  $(this).removeClass("present");
  $(this).addClass("past");
}





else if( timeBlock>currentHour){
  $(this).removeClass("present");
  $(this).addClass("future");
}
});

//Save provided information to the localstorage when save button is clicked.
$(".saveBtn").on("click",function(event){
event.preventDefault();
var value=$(this).siblings(".description").val();
var time=$(this).parent().attr("id").split("-")[1];
localStorage.setItem(time,value);



});

//Retrieve information from the localstorage to keep that in the page.
$("#hour-09").children(".description").val(localStorage.getItem("09"));
$("#hour-10").children(".description").val(localStorage.getItem("10"));
$("#hour-11").children(".description").val(localStorage.getItem("11"));
$("#hour-12").children(".description").val(localStorage.getItem("12"));
$("#hour-13").children(".description").val(localStorage.getItem("13"));
$("#hour-14").children(".description").val(localStorage.getItem("14"));
$("#hour-15").children(".description").val(localStorage.getItem("15"));
$("#hour-16").children(".description").val(localStorage.getItem("16"));
$("#hour-17").children(".description").val(localStorage.getItem("17"));













  