/**
 * Created by oneleaf on 15/10/9.
 */
var express=require("express");
var bodyParser=require("body-parser");
var app=express()
app.use(bodyParser())
app.get("/",function(req,res){
    var html='<form method="post">'+
            'First:<input type="text" name="first"><br>' +
            'Last:<input type="text" name="last"><br>' +
            '<input type="submit" value="submit">'+
            '</form>';
    res.send(html)
})

app.post("/", function(req,res){
    var html='<form method="post">'+
            'First:<input type="text" name="first"><br>'+
            'Last:<input type="text" name="last"><br>' +
            '<input type="submit" value="submit">'+
            '</form>'+
            '<h1>Hello,'+req.body.first+' - '+req.body.last+'</h1>';
    res.type('html')
    res.end(html)
    console.log(req.body);
})

app.listen(8080)