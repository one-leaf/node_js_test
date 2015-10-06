/**
 * Created by oneleaf on 2015/10/2.
 */
var http=require("http");
var options ={
    hostname:"localhost",
    port:"8080"
}
function handleResponse(response){
    var serverData="";
    response.on("data",function(chunk){
        serverData+=chunk;
    })
    response.on("end",function(){
        console.log("status:",response.statusCode);
        console.log("header:"+JSON.stringify(response.headers));
        console.log(serverData);
    })
}
http.request(options,function(res){
    handleResponse(res);
}).end();