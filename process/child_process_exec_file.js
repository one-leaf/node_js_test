/**
 * Created by oneleaf on 2015/10/3.
 */
var childProcess =require("child_process");
var options={maxbuffer:100*1024,encoding:"bin",timeout:"5000"}
var iconv = require('iconv-lite');
var child=childProcess.execFile('ping.exe',['-n','3','baidu.com'],options,function(error,stdout,stderr){
    if (error){
        console.log(error.stack);
        console.log(error.code);
        console.log(error.signal);
    }
    console.log(stdout);
    console.log(iconv.decode(stdout, 'gbk'));
    if (stderr.length){
        console.log(stderr);
    }
})

child.on("exit",function(code){
    console.log("code:%s", code);
})