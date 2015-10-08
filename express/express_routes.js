/**
 * Created by oneleaf on 15/10/8.
 */
var express = require("express")
var url=require("url")
var app=express()
app.listen(8080);

app.get("/",function(req,res){
    res.send("Get Index");
})

app.get("/find",function(req,res){
    var url_parts=url.parse(req.url,true);
    var query=url_parts.query;
    var response="Finding Book: Author: "+query.author+" Title: "+query.title;
    console.log("\nQuery URL:" + req.originalUrl);
    console.log(response);
    res.send(response);
})

app.get(/^\/book\/(\w+)\:(\w+)?$/,function(req,res){
    var response = "Get Book: Chapter: "+req.params[0]+
            " Page: "+req.params[1];
    console.log("\nRegex URL:" + req.originalUrl);
    console.log(response);
    res.send(response);
})

app.get("/user/:userid",function(req,res){
    var response="Get User: "+req.params.userid;
    console.log("\nParam URL:" + req.originalUrl);
    console.log(response);
    res.send(response);
})

app.param("userid",function(req,res,next,value){
    console.log("\nRequest recedived with userid:" + value);
    next();
})


/**
 * test url
 * http://127.0.0.1:8080/find?author=xxxx&title=yyyy
 * http://127.0.0.1:8080/book/11:22
 * http://127.0.0.1:8080/user/2323
  */