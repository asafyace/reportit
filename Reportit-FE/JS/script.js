//Accordian Action
var action = 'click';
var speed = "500";


//Document.Ready
$(document).ready(function(){
  //Question handler
$('li.q').on(action, function(){
  //gets next element
  //opens .a of selected question
$(this).next().slideToggle(speed)
    //selects all other answers and slides up any open answer
    .siblings('li.a').slideUp();
  
  //Grab img from clicked question
var img = $(this).children('img');
  //Remove Rotate class from all images except the active
  $('img').not(img).removeClass('rotate');
  //toggle rotate class
  img.toggleClass('rotate');

});//End on click


});//End Ready


/*
let reportData =
{
  reporterName = undefined,
  reporterPhone = undefined,
  reporterEmail = undefined,
  reportLocation = 
  {
    latitude = undefined,
    longitude = undefined
  },
  reportpicture = undefined
}

//update:
document.getElementById("reportForm").addEventListener('submit', () =>
{
  //validation, validator (npm)
  //image size < 1.5 M
  //resize image with sharp (npm)
  
  //fill report data:
  reportData.reporterName = document.getElementById("reporterName").value
  //the rest of data
  


  //when all data is ready in reportData
  //http request (POST) to send all JSON data
  //http request (POST) upload picture
  //error handler = if response is error
})
*/