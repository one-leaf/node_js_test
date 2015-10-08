/**
 * Created by oneleaf on 15/10/8.
 */
var express=require("express")
var url=require("url")
var app=express()

app.listen(8080)

app.get("/js",function(req,res){
    res.sendfile("express_send_file.js",
        {
            maxAge:1,
            root:".",
        },function(err){
            if (err){
                console.log("Error:" + err);
            }else{
                console.log("Success");
            }
        })
})