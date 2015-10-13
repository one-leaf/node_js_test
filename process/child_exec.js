/**
 * Created by oneleaf on 2015/10/3.
 */
var childProcess=require("child_process");
var options={maxBuffer:100*1024,encodeing:"utf8",timeout:5000};
var child=childProcess.exec("dir /B",options,function(err,stout,stderr){
    if (err){
        console.log(err, stack);
        console.log("Error code:%s", err.code);
        console.log("Error Signal:%s", err.signal);
    }
    console.log("Result:\n%s", stout);
    if (stderr.length){
        console.log("Error:%s", stderr);
    }
})

child.on("exit",function(code){
    console.log("Completed with code:%s", code);
})