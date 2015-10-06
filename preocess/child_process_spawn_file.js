/**
 * Created by oneleaf on 2015/10/3.
 */
var spawn=require("child_process").spawn;
var iconv = require('iconv-lite');
var options={
    env:{user:"oneleaf"},
    detached:false,
    stdio:["pipe",'pipe','pipe']
}
var child = spawn('netstat',['-e'])
child.stdout.on("data",function(data){
    console.log(iconv.decode(data, 'gbk'));
   // console.log(data.toString());
})

child.stderr.on("data",function(data){
    console.log(data.toString());
})

child.on("exit",function(code){
    console.log("Child exited with code :", code);
})