/**
 * Created by oneleaf on 2015/10/3.
 */
var child_process=require("child_process")
var ops={
    env:{user:"oneleaf"},
    encoding:"utf8"
}
function makeChild(){
    var child=child_process.fork("chef.js",[],ops);
    child.on("message",function(message){
        console.log("Served: " + message);
    })
    return child;
}

function sendCommand(child,command){
    console.log("Requesting: " + command);
    child.send({cmd:command});
}

var child1=makeChild();
var child2=makeChild();
var child3=makeChild();
sendCommand(child1,"sendchild1");
sendCommand(child2,"sendchild2");
sendCommand(child3,"sendchild3");

