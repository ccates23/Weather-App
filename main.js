var API_URL = 'http://api.wunderground.com/api/a070218f3b576b90/conditions/geolookup/forecast10day/q/';

var button = document.querySelector('button');

button.onclick = function () {
  var input = document.querySelector('input');
  var image = document.querySelector('img');
  var zipcode = input.value;
  
   getJSON(API_URL + zipcode + '.json', function (data) {
    var td = document.querySelectorAll('td');
   
    for( i = 0 ; i < 5; i++){
   image.src =
  data.forecast.simpleforecast.forecastday[i].icon_url;
     
   var high = data.forecast.simpleforecast.forecastday[i].high.fahrenheit;
      var low = data.forecast.simpleforecast.forecastday[i].low.fahrenheit;
           var weekday = data.forecast.simpleforecast.forecastday[i].date.weekday;
      td[i].innerHTML = high + '/' + low + ' ' + weekday;
      td[i].appendChild(image);
      
    }
   });
}
   
     
  
  button2.onclick = function () {
  var input = document.querySelector('input');
  var location = input.value;
    navigator.geolocation.getCurrentPosition(function(location){
  var lat = location.coords.latitude;
  var long = location.coords.longitude;
   td[i].innerHTML = location;
});
   
  }
 

  
    
    
  

  getJSON(API_URL + location + '.json', function (data) {
    var td = document.querySelectorAll('td');
    for( i = 0 ; i < 5; i++){
      var weekday = data.forecast.simpleforecast.forecastday.date[i].weekday_short;
      td[i].innerHTML = weekday;
    
    }

  });
  
 function getJSON(url, cb) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  };

  xhr.send();
 }


