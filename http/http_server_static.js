/**
 * Created by oneleaf on 2015/10/1.
 */
var fs=require("fs")
var http=require("http")
var url=require("url")
var ROOT_DIR="D://"
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true,false);
    fs.readFile(ROOT_DIR+urlObj.pathname,function(err,data){
        if(err){
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(8080);