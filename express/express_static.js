/**
 * Created by oneleaf on 15/10/9.
 */
var express=require("express");

var app=express();

app.use("/static",express.static("."));

app.listen(8080);

/**
 * test URL:
 * http://127.0.0.1:8080/static/user_ejs.html
 * DOC URL:
 * http://expressjs.com/zh/starter/static-files.html
 */