//Google map

var map, infoWindow,pos;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 16
    });
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            //reportData.reportLocation.latitude = pos.lat
            
            infoWindow.setPosition(pos);
            infoWindow.setContent('&nbsp &nbsp &nbsp &nbsp 📍ReportIt Location📍');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

//Image validation 

//Google map
var x,data;

// Make json
function onSubmit( form )
{
  x = document.getElementById("myFile").value;
  data = JSON.stringify(x);
  data += JSON.stringify( $(form).serializeArray()); 
  data += JSON.stringify(pos);
  console.log(data);
  document.form.submit();
  return false; //don't submit
}

//FAQ Menu
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
