/**
 * Created by oneleaf on 15/10/8.
 */
var express=require("express"),
    jade=require("jade"),
    ejs=require("ejs");
var app=express();

app.set("views",".")
app.set("view engine","jade")
app.engine("jade",jade.__express);
app.engine("html",ejs.renderFile);

app.listen(8080);

app.locals={
    uname:"Brad",
    vehicle:"Jeep",
    terrain:"Mountains",
    climate:"Desert",
    location:"Unknown"
};

app.get("/jade",function(req,res){
    res.render("user_jade")
})

app.get("/ejs",function(req,res){
    app.render("user_ejs.html",function(err,renderedData){
        if(err){
            console.log(err);
            res.send(err.message);
        }else {
            res.send(renderedData);
        }
    })
})
