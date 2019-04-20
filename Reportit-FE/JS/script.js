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

function confirmMsg(){
  var x= confirm("Your photo has been submitted");
  if(x==true)
    document.getElementById("hide").style.display="flex";
    document.getElementById("hide").style.margin="0, auto";
}