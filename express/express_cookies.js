/**
 * Created by oneleaf on 15/10/9.
 */
var express=require('express')
var cookieParser=require('cookie-parser')
var app=express()
app.use(cookieParser())
app.get('/',function(req,res){
    console.log(req.cookies);

    if(!req.cookies.hasVisited){
        res.cookie('hasVisited','1',{
            maxAge:60*60*1000,
            hasOnly:true,
            path:'/'
        })
    }
    res.send("Sending Cookie");
})

app.listen(8080)