var request = require('request');
var httpString = "https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
//httpString = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition.text%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22dallas%2C%20tx%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
request(httpString, function (error, response, body) {
  console.log("body - begin");
  console.log(body);
  console.log("body - end");
  if (!error && response.statusCode == 200){
          //things worked
          var parsedData = JSON.parse(body);
          console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
  }
})

