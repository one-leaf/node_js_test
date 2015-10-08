/**
 * Created by oneleaf on 15/10/8.
 */
var express=require("express");
var url=require("url");
var app=express();
app.listen(8080);

app.get("/baidu",function(req,res){
    res.redirect("http://www.baidu.com");
})

app.get("/1",function(req,res){
    res.redirect("/2")
})

app.get("/2",function(req,res){
    res.redirect("/3/3/")
})

app.get("/3/3/",function(req,res){
    res.redirect("../4")
})

app.get("/3/4",function(req,res){
    res.send("redirect fine.")
})