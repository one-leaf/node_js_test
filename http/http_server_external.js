/**
 * Created by oneleaf on 2015/10/2.
 */
var http=require("http");
var url=require("url");
var qstring=require("querystring");
function sendRespone(weatherData,res){
    var page='<html><head><title>External Example</title></head>'+
            '<body>'+
            '<form method="post">' +
            'City:<input name="city"><br>'+
            '<input type="submit" value="Get Weather">'+
            '</form>';
    if (weatherData){
        page += '<h1>Weather info</h1><p>'+weatherData+'</p>';
    }
    page += '</body></html>';
    res.end(page);
}

function parseWeather(weatherRespone,res){
    var weatherData="";
    weatherRespone.on("data",function(thrunk){
        weatherData+=thrunk;
    })
    weatherRespone.on("end",function(){
        sendRespone(weatherData,res);
    })
}

function getWeather(city,res){
    var options={
        host:"api.openweathermap.org",
        path:"/data/2.5/weather?q="+city
    }
    http.request(options,function(weatherResponse){
        parseWeather(weatherResponse,res);
    }).end();
}

http.createServer(function(req,res){
    console.log(req.method,req.url);
    if (req.method=="POST"){
        var reqData="";
        req.on("data",function(chunk){
            reqData+=chunk;
        })
        req.on("end",function(){
            var postParames=qstring.parse(reqData);
            getWeather(postParames.city,res);
        })
    }else{
        sendRespone(null,res);
    }
}).listen(8080);