/**
 * Created by oneleaf on 15/10/10.
 */
var express=require('express');
var app=express();
app.use('/',express.static('./static'));
app.use('/images',express.static('./images'));
app.use('/lib',express.static('./lib'));

app.listen(8080);