/**
 * Created by oneleaf on 2015/10/3.
 */
process.on("message",function(message,parent){
    var meal={};
    switch (message.cmd){
        case 'sendchild1':
            meal=["1","11","111"];
            break
        case 'sendchild2':
            meal=['2',"22","222"];
            break
        case 'sendchild3':
            meal=['3','33','333']
            break;
    }
    process.send(meal)
})