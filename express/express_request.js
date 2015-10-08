/**
 * Created by oneleaf on 15/10/8.
 */
var express=require("express");
app=express();
app.listen(8080);

app.get("/user/:userid",function(req,res){
    var response= "URL:\t" + req.originalUrl +
    "\nProtocol:\t" + req.protocol+
    "\nIP:\t" + req.ip+
    "\nPath:\t" + req.path+
    "\nHost:\t" + req.hostname+
    "\nMethod:\t" + req.method+
    "\nQuery:\t" + JSON.stringify(req.query)+
    "\nFresh:\t" + req.fresh+
    "\nStale:\t" + req.stale+
    "\nSecure:\t" + req.secure+
    "\nUTF8:\t" + req.acceptsCharsets("utf8")+
    "\nConnect:\t" + req.get("connection")+
    "\nHeaders:\t" + JSON.stringify(req.headers, null, 2);
    console.log(response);
    res.send("<pre>"+response+"</pre>");
})

/**
 * Test URL:
 * http://127.0.0.1:8080/user/22222
 */