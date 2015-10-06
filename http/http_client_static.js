/**
 * Created by oneleaf on 2015/10/1.
 */
var http=require("http");
var options ={
    hostname:"localhost",
    port:"8080",
    path:"/install.ini"
}
function handleRespone(response){
    var serverData="";
    response.on("data",function(chunk){
        serverData += chunk;
    })
    response.on("end",function(){
        console.log(serverData);
    })
}
http.request(options,function(response){
    handleRespone(response);
}).end();
