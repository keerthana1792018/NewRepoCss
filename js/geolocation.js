var position=document.getElementById("location");

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(fuction(myPosition){
        var lat=myPosition.Coords.latitude
        var lon=myPosition.Coords.longtitude
        var alt=myPosition.Coords.altitude
    });
}