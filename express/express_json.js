/**
 * Created by oneleaf on 15/10/8.
 */
var express=require("express")
var url=require("url")
var app=express()
app.listen(8080)

app.get("/json",function(req,res){
    app.set("json spaces",4);
    res.json({
        name:"xxx",
        build:"21212",
        centers:["art","space","zoo"]
    })
})

app.get("/error",function(req,res){
    res.json(500,{status:false,message:"Internal Server Error"});
})

app.get("/jsonp",function(req,res){
    app.set("jsonp callback name","cb")
    res.jsonp({
        "name":"yyy",
        build:"1212",
        centers:["art","planetary","biology"]
    })
})

/**
 * http://127.0.0.1:8080/json
 * http://127.0.0.1:8080/error
 * http://127.0.0.1:8080/jsonp?cb=handleJSONP
 */