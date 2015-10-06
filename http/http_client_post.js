/**
 * Created by oneleaf on 2015/10/2.
 */
var http=require("http")
var op={
    host:"localhost",
    path:"/",
    port:"8080",
    method:"POST"
}

function readJSONRep(rep){
    var repData="";
    rep.on("data",function(chunk){
        repData+=chunk;
    })
    rep.on("end",function(){
        var dataObj=JSON.parse(repData);
        console.log("RAW Respone:",repData);
        console.log("Message",dataObj.message);
        console.log("Question",dataObj.question);
    })

}
var req=http.request(op,readJSONRep);
req.write('{"name":"xxxx","occupation":"burglar"}');
req.end();
