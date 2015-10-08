/**
 * Created by oneleaf on 15/9/30.
 */
var fs=require("fs");
var config={
    maxFiles:20,
    maxConnect:15,
    rootPath: "/webroot"
}

var configTxt = JSON.stringify(config);
var options={encoding:"utf8",flag:"w"};
fs.writeFile("config.txt",configTxt,options,function(err){
    if (err){
        console.log("Config file write failed")
    }else{
        console.log("Config file saved")
    }
})