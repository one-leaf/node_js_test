/**
 * Created by oneleaf on 2015/10/2.
 */
var http=require("http")
http.createServer(function(req,res){
    var jsonData="";
    req.on("data",function(chunk){
        jsonData+=chunk;
    });
    req.on("end",function(){
        var reqObj=JSON.parse(jsonData);
        var resObj={
            message:"hello "+reqObj.name,
            question:"Are you a good "+reqObj.occupation +"?"
        };
        res.writeHead(200);
        res.end(JSON.stringify(resObj));
    });
}).listen(8080);
