/**
 * Created by oneleaf on 15/10/8.
 */
var express=require("express");
var url=require("url");
var app=express();
app.listen(8080);

app.get("/",function(req,res){
    var response="<html><head><title>Simple Send</title></head><body>Hello</body></html>"
    res.status(200);
    res.set({
        "Content-Type":"text/html",
        "Content-Length":response.length
    });
    res.send(response);
    console.log("Response Finished?" + res.finished);
    console.log("\nHeaders Send:");
    console.log(res.header());
});

app.get("/error",function(req,res){
    res.status(400);
    res.send("This is a bad request.");
});