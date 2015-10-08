/**
 * Created by oneleaf on 15/9/30.
 */
var fs=require("fs");
var options={encoding:"utf8",flag:"r"};
fs.readFile("config.txt",options,function(err,data){
    if (err){
        console.log("Failed to read config file")
    }else{
        console.log("Config load")
        var config=JSON.parse(data);
        console.log("Max Files : %s",config.maxFiles);
    }
});