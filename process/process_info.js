/**
 * Created by oneleaf on 2015/10/3.
 */
var util=require("util");
console.log("CWD:"+process.cwd());
console.log("ENV:"+JSON.stringify(process.env));
console.log("ARGV:"+process.argv);
console.log("EXECPATH:"+process.execPath);
console.log("EXECARGV:"+JSON.stringify(process.execArgv));
console.log("VER:"+process.version);
console.log("VERS:"+JSON.stringify(process.versions));
console.log("CONFIG:"+JSON.stringify(process.config));
console.log("PID:"+process.pid);
console.log("TITLE:"+process.title);
console.log("PLATFORM:"+process.platform);
console.log("ARCH:"+process.arch);
console.log("Mem usage:" +util.inspect(process.memoryUsage()));
var start=process.hrtime()
setTimeout(function(){
    var delta=process.hrtime(start);
    console.log("High-res tiner took %s seconds and %d nanoseconds",delta[0],delta[1]);
    console.log("Node has been runing %d seconds",process.uptime());
},1000);
